import Cookies from 'js-cookie';
import { cookieName } from 'lib/cookie.helper';

export function getToken(): string | Error {
  const token = Cookies.get(cookieName);
  if (!token) {
    throw new Response('', { status: 401 });
  }
  return token;
}
