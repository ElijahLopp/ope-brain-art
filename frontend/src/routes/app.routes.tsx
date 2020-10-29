import React from 'react';
import FlowTemplate from '~/components/templates/FlowTemplate';
import Finance from '~/pages/Finance';
import Home from '~/pages/Home';
import MedicalRecord from '~/pages/MedicalRecord';
import {ROUTER_NAME} from './constants';
import Route from './Route';

const AppRoutes: React.FC = () => {
  return (
    <FlowTemplate>
      <Route path={ROUTER_NAME.HOME} exact component={Home} />
      <Route path={ROUTER_NAME.FINANCE} exact component={Finance} />
      <Route
        path={ROUTER_NAME.MEDICAL_RECORD}
        exact
        component={MedicalRecord}
      />
    </FlowTemplate>
  );
};

export default AppRoutes;
