import React from 'react';
import {
  Redirect,
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouterProps,
} from 'react-router-dom';
import {useAuth} from '~/hooks/auth';
import {ROUTER_NAME} from './constants';

interface RouteProps extends ReactDOMRouterProps {
  isPublic?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPublic = false,
  component: Component,
  ...props
}) => {
  const {user} = useAuth();

  return (
    <ReactDOMRoute
      {...props}
      render={({location}) => {
        if (isPublic || user) {
          return <Component />;
        }

        return (
          <Redirect
            to={{
              pathname: ROUTER_NAME.SIGNIN,
              state: {from: location},
            }}
          />
        );
      }}
    />
  );
};

export default Route;
