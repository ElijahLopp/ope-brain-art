import React from 'react';
import NavBar from '~/components/organisms/NavBar';
import {useAuth} from '~/hooks/auth';
import * as S from './styles';

const FlowTemplate: React.FC = ({children}) => {
  const {signOut, user} = useAuth();

  // const handleClickLogout = useCallback(() => {
  //   signOut();
  // }, [signOut]);

  return (
    <S.Container>
      <NavBar />
      <S.Context>{children}</S.Context>
    </S.Container>
  );
};

export default FlowTemplate;
