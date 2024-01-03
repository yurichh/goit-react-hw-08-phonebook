import { useAuth } from 'hooks/useAuth';
import { Route, redirect } from 'react-router-dom';

const PublicRoute = ({ children, restricted = false, ...routeProps }) => {
  const { isLoggedIn } = useAuth();
  const shouldRedirect = isLoggedIn && restricted;
  return (
    <Route {...routeProps}>{shouldRedirect ? redirect('/') : children}</Route>
  );
};

export default PublicRoute;
