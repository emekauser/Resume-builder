import { NextRequest, NextResponse } from 'next/server';

export const middleware = async (req: NextRequest) => {
  const pathname = req.nextUrl.pathname.toLowerCase();
  console.log('middleware', pathname);

  if (pathname.includes('/login') || pathname.includes('/signup')) {
    return NextResponse.redirect(new URL('/signin', req.url));
  }
  
  return NextResponse.next();
};

export const config = {
  matcher: '/users',
}
