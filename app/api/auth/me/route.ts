import { authOptions } from '@shared/config';
import { prisma } from '@shared/database';
import { getServerSession } from 'next-auth/next';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      return NextResponse.json({ message: 'Вы не авторизованы' }, { status: 401 });
    }

    const userId = Number(session.user.id);
    if (isNaN(userId)) {
      return NextResponse.json({ message: 'Неверный идентификатор пользователя' }, { status: 400 });
    }

    const data = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        fullName: true,
        email: true,
      },
    });

    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: '[USER_GET] Server error' }, { status: 500 });
  }
}
