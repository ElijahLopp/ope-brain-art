import React from 'react';
import NavBar from '~/components/organisms/NavBar';
import * as S from './styles';

const FlowTemplate: React.FC = ({children}) => {
  return (
    <S.Container>
      <NavBar />
      <S.Context>{children}</S.Context>
    </S.Container>
  );
};

export default FlowTemplate;
