import GenericError from 'components/errors/generic.error';
import NotfoundError from 'components/errors/notfound.error';
import { isRouteErrorResponse, Navigate, useRouteError } from 'react-router-dom';

export function RootBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return <NotfoundError />;
    }

    if (error.status === 401) {
      return <Navigate to="/user/login" replace={true} />;
    }
  }

  return <GenericError />;
}
