import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const hostname = request.headers.get('host')

  if (hostname) {
    const subdomain = hostname.split('.')[0]

    if (subdomain && subdomain !== 'www' && subdomain !== 'localhost') {
      url.pathname = `/_sites/${subdomain}${url.pathname}`
      return NextResponse.rewrite(url)
    }
  }

  return NextResponse.next()
}
