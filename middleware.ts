// middleware.ts

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Cetak log ke terminal untuk memastikan file ini berjalan
  console.log('MIDDLEWARE SEDERHANA AKTIF UNTUK PATH:', request.nextUrl.pathname);

  // Langsung paksa alihkan (redirect) ke halaman /login
  return NextResponse.redirect(new URL('/login', request.url));
}

export const config = {
  matcher: '/donasi',
};