import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const hostname = request.headers.get('host') || 'localhost';

  console.log(`[Middleware] Host: ${hostname}, Path: ${url.pathname}`);

  if (hostname.includes('localhost')) {
    console.log('[Middleware] Localhost detected, skipping rewrite.');
    return NextResponse.next();
  }

  
  const subdomain = hostname.split('.')[0];
  if (subdomain && subdomain !== 'www') {
    url.pathname = `/_sites/${subdomain}${url.pathname}`;
    console.log(`[Middleware] Rewriting to: ${url.pathname}`);
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
