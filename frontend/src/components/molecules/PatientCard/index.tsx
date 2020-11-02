import React, {useCallback} from 'react';
import {PatientCardProps} from './interfaces';
import * as S from './styles';

const PatientCard: React.FC<PatientCardProps> = ({data, onClick}) => {
  const handleOnClick = useCallback(() => {
    onClick(data);
  }, [data, onClick]);

  return (
    <S.Container onClick={handleOnClick}>
      <S.Avatar />
      <S.Content>
        <S.Name>{data.name}</S.Name>
        <S.Description>
          AIOok okaposdkklm 00k,sd0wklop oo0vm 0asmopad
        </S.Description>
      </S.Content>
    </S.Container>
  );
};

export default PatientCard;
