import React from 'react';
import {Switch} from 'react-router-dom';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';
import {ROUTER_NAME} from './constants';
import Route from './Route';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route
        path={[
          ROUTER_NAME.SIGNIN,
          ROUTER_NAME.FORGOT_PASSWORD,
          ROUTER_NAME.REDEFINE_PASSWORD,
        ]}
        exact
        component={AuthRoutes}
        isPublic
      />
      <Route
        path={[
          ROUTER_NAME.HOME,
          ROUTER_NAME.FINANCE,
          ROUTER_NAME.MEDICAL_RECORD,
          ROUTER_NAME.SCHEDULE,
        ]}
        component={AppRoutes}
      />
    </Switch>
  );
};

export default Routes;
