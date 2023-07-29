import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// TODO: fazer um middleware caso alguem ja esteja logado
 
export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL('/auth/login', request.url));
}

export const config = {
  matcher: '/auth',
}