import React, { useContext } from 'react';
import { Route, Redirect, RouteComponentProps, RouteProps } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

export interface PrivateRouteProps extends RouteProps {
  component: React.FunctionComponent<RouteComponentProps>;
  path: string;
  exact?: boolean;
}

const PrivateRoute = (props: PrivateRouteProps): JSX.Element => {
  let { component: Component, path, exact, ...rest } = props;
  const { user } = useContext(UserContext);

  return (
    <Route
      {...rest}
      path={path}
      exact={exact}
      render={props => {
        return user.loggedIn ? <Component {...props} /> : <Redirect to="/login" />;
      }}
    />
  );
};

export default PrivateRoute;
