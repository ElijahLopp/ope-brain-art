import React, {useCallback} from 'react';
import {uriAvatar} from '~/helpers/patient';
import {PatientCardProps} from './interfaces';
import * as S from './styles';

const PatientCard: React.FC<PatientCardProps> = ({
  data,
  onClick,
  isSelected,
}) => {
  const handleOnClick = useCallback(() => {
    onClick(data);
  }, [data, onClick]);
  return (
    <S.Container onClick={handleOnClick} isSelected={isSelected}>
      <S.AvatarContainer uri={uriAvatar(data.avatar)} />
      <S.Content>
        <S.Name>{data.nome}</S.Name>
        <S.Description></S.Description>
      </S.Content>
    </S.Container>
  );
};

export default PatientCard;
