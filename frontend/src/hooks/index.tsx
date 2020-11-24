import React from 'react';
import {AuthProvider} from './auth';
import FinanceProvider from './finance/FinanceProvider';
import PatientProvider from './patient/PatientProvider';
import ScheduleProvider from './schedule/ScheduleProvider';
import SessionProvider from './session/SessionProvider';

const AppProvider: React.FC = ({children}) => (
  <AuthProvider>
    <PatientProvider>
      <SessionProvider>
        <ScheduleProvider>
          <FinanceProvider>{children}</FinanceProvider>
        </ScheduleProvider>
      </SessionProvider>
    </PatientProvider>
  </AuthProvider>
);

export default AppProvider;
