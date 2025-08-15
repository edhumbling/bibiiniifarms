import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Common redirects for SEO and user experience
  const redirects: Record<string, string> = {
    '/home': '/',
    '/index': '/',
    '/eggs': '/products',
    '/egg': '/products', 
    '/shop': '/products',
    '/buy': '/order',
    '/purchase': '/order',
    '/locate': '/store-locator',
    '/location': '/store-locator',
    '/locations': '/store-locator',
    '/farmers': '/farms',
    '/farm': '/farms',
    '/join': '/become-farmer',
    '/signup': '/become-farmer',
    '/news': '/blog',
    '/articles': '/blog',
    '/help': '/faqs',
    '/faq': '/faqs',
    '/support': '/contact',
    '/reach': '/contact',
    '/heritage-eggs': '/products/heritage',
    '/pasture-eggs': '/products/pasture-raised',
    '/organic-eggs': '/products/organic',
    '/free-range-eggs': '/products/free-range',
  };

  // Check for redirects
  if (redirects[pathname]) {
    return NextResponse.redirect(new URL(redirects[pathname], request.url));
  }

  // Handle trailing slash consistency
  if (!pathname.endsWith('/') && pathname !== '/' && !pathname.includes('.')) {
    return NextResponse.redirect(new URL(pathname + '/', request.url));
  }

  // Remove multiple slashes
  if (pathname.includes('//')) {
    const cleanPath = pathname.replace(/\/+/g, '/');
    return NextResponse.redirect(new URL(cleanPath, request.url));
  }

  // Security headers
  const response = NextResponse.next();
  
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - robots.txt
     * - sitemap.xml
     */
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)',
  ],
};
