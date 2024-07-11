import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
 import { getCookie, getCookies } from 'cookies-next'


 export function middleware(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const skipMiddleware = searchParams.get('skipMiddleware');
   console.log(request.url)
  if (skipMiddleware === 'true') {
      return NextResponse.next();
  }
    const token = request.cookies.get('token')?.value
    
    if(!token){
      
      return NextResponse.redirect(new URL('/auth-server-action', request.url))

    }else{
      return NextResponse.next()

    }
}
 
export const config = {

  matcher: [        '/((?!api|_next/static|_next/image|favicon.ico|auth-server-action).*)',
  
  ],
}