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
        <S.Description>
          AIOok okaposdkklm 00k,sd0wklop oo0vm 0asmopad
        </S.Description>
      </S.Content>
    </S.Container>
  );
};

export default PatientCard;
