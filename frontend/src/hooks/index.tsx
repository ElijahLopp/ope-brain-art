import React from 'react';
import {AuthProvider} from './auth';
import PatientProvider from './patient/PatientProvider';

const AppProvider: React.FC = ({children}) => (
  <AuthProvider>
    <PatientProvider>{children}</PatientProvider>
  </AuthProvider>
);

export default AppProvider;
