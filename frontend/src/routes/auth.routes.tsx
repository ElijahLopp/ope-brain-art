import React from 'react';
import FlowAuthTemplate from '~/components/templates/FlowAuthTemplate';
import ForgotPassword from '~/pages/ForgotPassword';
import RedefinePassword from '~/pages/RedefinePassword';
import SignIn from '~/pages/SignIn';
import {ROUTER_NAME} from './constants';
import Route from './Route';

const AuthRoutes: React.FC = () => {
  return (
    <FlowAuthTemplate>
      <Route path={ROUTER_NAME.SIGNIN} exact component={SignIn} isPublic />
      <Route
        path={ROUTER_NAME.FORGOT_PASSWORD}
        exact
        component={ForgotPassword}
        isPublic
      />
      <Route
        path={ROUTER_NAME.REDEFINE_PASSWORD}
        exact
        component={RedefinePassword}
        isPublic
      />
    </FlowAuthTemplate>
  );
};

export default AuthRoutes;
