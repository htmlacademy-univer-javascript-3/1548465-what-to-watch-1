import { Navigate } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import { AuthorizationStatus } from '../../types/authorization/authorization-status.enum';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps) {
  const { authorizationStatus, children } = props;

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={ROUTES.SIGNIN} />
  );
}

export default PrivateRoute;
