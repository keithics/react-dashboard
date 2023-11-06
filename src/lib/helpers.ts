import { format, parseISO } from 'date-fns';
import { getToken } from './cookie.helper';

export function getAllQueryString() {
  const urlSearchParams = new URLSearchParams(window.location.search);
  return Object.fromEntries(urlSearchParams.entries());
}

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export const dateToTime = (date: Date) => date.toLocaleString('en-US');

export const localDate = (date: string) => dateToTime(new Date(date));

export function showComponent(show: boolean, component: React.ReactNode) {
  return show ? component : null;
}

/**
 * snakeCase to Capitalized Words
 * eg: firstName = First Name, homeFirstName = Home First Name
 * @param string
 */
export function snakeToCapitalize(string: string) {
  return string
    .replace(/([A-Z])/g, function (match) {
      return ' ' + match;
    })
    .replace(/^./, function (match) {
      return match.toUpperCase();
    });
}

export const friendlyDate = (date: Date) => format(parseISO(date.toString()), 'MMM dd, yyyy');

export function getUserData(): any {
  const data = localStorage.getItem('persist:root');
  const { user } = JSON.parse(data as string);
  return JSON.parse(user);
}

export function getApiUrl(): string {
  return '//' + window.location.hostname + ':8081';
}

export function getPrintLink(type: string, id: string): string {
  const token = getToken();
  const link = `${getApiUrl()}/certificates/birth/print/${id}/${type}/?auth_token=${token}`;
  return link;
}

export function hasProp<T>(obj: any, prop: string): obj is T {
  return obj.hasOwnProperty(prop);
}
