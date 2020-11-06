import Tooltip from '@material-ui/core/Tooltip';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import {format} from 'date-fns';
import React, {useCallback} from 'react';
import {SessionCardProps} from './interfaces';
import * as S from './styles';

const SessionCard: React.FC<SessionCardProps> = ({data, onClick}) => {
  const handleOnClick = useCallback(() => {
    onClick(data);
  }, [onClick, data]);
  return (
    <S.Container>
      <S.IconFolder />
      <S.Title>{`Sessão ${format(
        new Date(data.createdAt),
        'dd/MM/yyyy hh:mm',
      )}`}</S.Title>
      <Tooltip title="Ver Sessão" aria-label="Ver Sessão">
        <S.IconButton
          type="button"
          onClick={handleOnClick}
          aria-label="Ver Sessão">
          <VisibilityOutlinedIcon fontSize="small" />
        </S.IconButton>
      </Tooltip>
    </S.Container>
  );
};

export default SessionCard;
