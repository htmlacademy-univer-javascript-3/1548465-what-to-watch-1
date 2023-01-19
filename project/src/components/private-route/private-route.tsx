import { Navigate } from 'react-router-dom';
import { WebRoutes } from '../../constants/webRoutes';
import { AuthorizationStatus } from '../../types/authorization/authorization-status.enum';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

export default function PrivateRoute(props: PrivateRouteProps) {
  const { authorizationStatus, children } = props;

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={WebRoutes.SIGNIN} />
  );
}
