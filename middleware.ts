import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
    console.log('Middleware executed for:', request.nextUrl.pathname)
  if (request.nextUrl.pathname.startsWith('/teste')) {
    return NextResponse.rewrite(new URL('/teste-2', request.url))
  }
 
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.rewrite(new URL('/dashboard/user', request.url))
  }
}