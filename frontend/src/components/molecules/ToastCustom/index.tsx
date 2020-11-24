import React from 'react';
import {ToastProps} from 'react-toast-notifications';
import * as S from './styles';

const ToastCustom: React.FC<ToastProps> = ({children, ...res}) => {
  return <S.Container {...res}>{children}</S.Container>;
};

export default ToastCustom;
