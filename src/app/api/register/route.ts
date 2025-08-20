// app/api/register/route.ts

import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { username, email, password } = body;

    // 1. Validasi input
    if (!username || !email || !password) {
      return new NextResponse('Data tidak lengkap', { status: 400 });
    }

    // 2. Cek apakah user sudah ada
    const existingUser = await prisma.user.findFirst({
      where: { OR: [{ email: email }, { username: username }] },
    });

    if (existingUser) {
      return new NextResponse('Email atau username sudah digunakan', { status: 409 });
    }

    // 3. Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // 4. Buat user baru di database
    const user = await prisma.user.create({
      data: {
        username,
        email,
        hashedPassword,
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.error('REGISTRATION_ERROR', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}