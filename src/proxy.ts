import createProxy from 'next-intl/middleware';
import {routing} from './i18n/navigation';
 
export default createProxy(routing);
 
export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};