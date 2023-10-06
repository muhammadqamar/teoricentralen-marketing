import createIntlMiddleware from 'next-intl/middleware';


export function middleware(request) {
  const handleI18nRouting = createIntlMiddleware({
    locales: ['en', 'sv'],
    defaultLocale:'sv',
    // localeDetection: false
  });

  const response = handleI18nRouting(request);
  response.headers.set('x-url', request.url);


  return response;
}
export const config = {

  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
}
