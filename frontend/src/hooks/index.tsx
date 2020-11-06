import React from 'react';
import {AuthProvider} from './auth';
import PatientProvider from './patient/PatientProvider';
import SessionProvider from './session/SessionProvider';

const AppProvider: React.FC = ({children}) => (
  <AuthProvider>
    <PatientProvider>
      <SessionProvider>{children}</SessionProvider>
    </PatientProvider>
  </AuthProvider>
);

export default AppProvider;
