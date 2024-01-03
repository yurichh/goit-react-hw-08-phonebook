import { useAuth } from 'hooks/useAuth';
import { Route, redirect } from 'react-router-dom';

const PrivateRoute = ({ children, ...routeProps }) => {
  const { isLoggedIn } = useAuth();

  return (
    <Route {...routeProps}>{isLoggedIn ? children : redirect('/login')}</Route>
  );
};

export default PrivateRoute;
