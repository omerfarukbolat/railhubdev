import { NextRequest, NextResponse } from 'next/server';
import { defaultLocale, locales, type Locale } from './i18n/config';

export function proxy(request: NextRequest) {
  // Get locale from cookie
  const localeCookie = request.cookies.get('NEXT_LOCALE')?.value;
  
  // Validate locale or use default
  const locale = (localeCookie && locales.includes(localeCookie as Locale))
    ? localeCookie as Locale
    : defaultLocale;

  // Create response
  const response = NextResponse.next();
  
  // Set cookie if not set or different
  if (!localeCookie || localeCookie !== locale) {
    response.cookies.set('NEXT_LOCALE', locale, {
      maxAge: 60 * 60 * 24 * 365, // 1 year
      path: '/',
    });
  }

  // Set locale header for server components
  response.headers.set('x-locale', locale);

  return response;
}

export const config = {
  // Match all pathnames except for
  // - api routes
  // - _next (Next.js internals)
  // - static files
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};

