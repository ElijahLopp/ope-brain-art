import {DefaultToast, DefaultToastContainer} from 'react-toast-notifications';
import styled from 'styled-components';

export const Container = styled(DefaultToast)``;
export const ToastContainer = styled(DefaultToastContainer)`
  z-index: 10010 !important;
`;
