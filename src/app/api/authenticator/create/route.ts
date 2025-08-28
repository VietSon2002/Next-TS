import { prisma } from '@/core/lib/prisma';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  const { email, authenticator } = body;

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }

  try {
    const newAuth = await prisma.authenticator.create({
      data: {
        ...authenticator,
        userId: user.id,
      },
    });

    return NextResponse.json(newAuth, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to create authenticator' }, { status: 500 });
  }
}
