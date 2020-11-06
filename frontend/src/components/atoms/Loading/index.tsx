import CircularProgress from '@material-ui/core/CircularProgress';
import React from 'react';
import {LoadingProps} from './interfaces';
import * as S from './styles';

const Loading: React.FC<LoadingProps> = ({active}) => {
  return (
    <>
      {active && (
        <S.Container>
          <CircularProgress />
        </S.Container>
      )}
    </>
  );
};

export default Loading;
