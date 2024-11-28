import { prisma } from '@shared/database';
import { NextResponse } from 'next/server';

export async function GET() {
  const pizzTypes = await prisma.pizzaType.findMany();

  return NextResponse.json(pizzTypes);
}