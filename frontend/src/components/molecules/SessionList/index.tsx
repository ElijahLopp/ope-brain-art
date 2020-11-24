import React from 'react';
import SessionCard from '~/components/molecules/SessionCard';
import {SessionListProps} from './interfaces';
import * as S from './styles';

const SessionList: React.FC<SessionListProps> = ({onClick, data}) => {
  return (
    <S.Container>
      {data.map((item) => (
        <SessionCard key={item.id} data={item} onClick={onClick} />
      ))}
    </S.Container>
  );
};

export default SessionList;
