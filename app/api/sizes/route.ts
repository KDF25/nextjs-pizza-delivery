import { prisma } from '@shared/database';
import { NextResponse } from 'next/server';

export async function GET() {
  const sizes = await prisma.size.findMany();

  return NextResponse.json(sizes);
}