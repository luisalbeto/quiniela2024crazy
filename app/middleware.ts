import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
 import { getCookie } from 'cookies-next'
export function middleware(request: NextRequest) {
    const token = getCookie('token');
    if(token){
        console.log(token)
    }
    return NextResponse.next()
  //return NextResponse.redirect(new URL('/home', request.url))
}
 
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|auth-server-action).*)',
  ],
}