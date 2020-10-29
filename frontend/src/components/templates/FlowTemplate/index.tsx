import React from 'react';
import {useAuth} from '~/hooks/auth';
import * as S from './styles';

const FlowTemplate: React.FC = ({children}) => {
  const {signOut, user} = useAuth();

  // const handleClickLogout = useCallback(() => {
  //   signOut();
  // }, [signOut]);

  return (
    <S.Container>
      <S.Context>{children}</S.Context>
    </S.Container>
  );
};

export default FlowTemplate;
