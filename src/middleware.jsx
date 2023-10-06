import createIntlMiddleware from 'next-intl/middleware';


export function middleware(request) {
  const defaultLocale = request.headers.get('x-default-locale') || 'sv';
  const handleI18nRouting = createIntlMiddleware({
    locales: ['en', 'sv'],
    defaultLocale
  });

  const response = handleI18nRouting(request);
  // console.log('qamar', response.headers.get('link'))

  response.headers.set('x-default-locale', defaultLocale);
  // const requestHeaders = new Headers(request.headers);
  response.headers.set('x-url', request.url);


  return response;
}
export const config = {

  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
}
