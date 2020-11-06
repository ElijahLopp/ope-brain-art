import Button from '@material-ui/core/Button';
import React from 'react';
import {FaFilePdf} from 'react-icons/fa';
import {AttachmentCardProps} from './interfaces';
import * as S from './styles';

const AttachmentCard: React.FC<AttachmentCardProps> = ({data}) => {
  return (
    <S.Container>
      <S.Content>
        <S.IconContainer>
          <FaFilePdf size={30} color="#ccc" />
        </S.IconContainer>
        <S.NameText>{data.nome}</S.NameText>
      </S.Content>
      <S.Actions>
        <Button size="small" color="primary">
          Download
        </Button>
      </S.Actions>
    </S.Container>
  );
};

export default AttachmentCard;
