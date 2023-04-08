import { HandleInterface } from 'common/interfaces/route-handle.interface';
import { useMatches } from 'react-router-dom';

// https://github.com/remix-run/react-router/discussions/9812
export function getRouteHandleById(id: string): unknown {
  let matches = useMatches();
  const route = matches.find((m) => m.id === id);
  return route?.handle;
}

export function getBasePath(id: string) {
  const route = getRouteHandleById(id) as HandleInterface;
  return route.basePath;
}
