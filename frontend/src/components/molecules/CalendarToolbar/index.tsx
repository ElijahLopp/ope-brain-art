import Tooltip from '@material-ui/core/Tooltip';
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import EventOutlinedIcon from '@material-ui/icons/EventOutlined';
import ViewArrayOutlinedIcon from '@material-ui/icons/ViewArrayOutlined';
import ViewColumnOutlinedIcon from '@material-ui/icons/ViewColumnOutlined';
import ViewDayOutlinedIcon from '@material-ui/icons/ViewDayOutlined';
import ViewModuleOutlinedIcon from '@material-ui/icons/ViewModuleOutlined';
import React, {useCallback} from 'react';
import {ToolbarProps} from 'react-big-calendar';
import * as S from './styles';

const CalendarToolbar: React.FC<ToolbarProps> = ({
  onView,
  label,
  onNavigate,
}) => {
  const handleToViewMonth = useCallback(() => {
    onView('month');
  }, [onView]);
  const handleToViewWeek = useCallback(() => {
    onView('week');
  }, [onView]);
  const handleToViewWorkWeek = useCallback(() => {
    onView('work_week');
  }, [onView]);
  const handleToViewDay = useCallback(() => {
    onView('day');
  }, [onView]);
  const handleToPrev = useCallback(() => {
    onNavigate('PREV');
  }, [onNavigate]);
  const handleToNext = useCallback(() => {
    onNavigate('NEXT');
  }, [onNavigate]);
  const handleToToday = useCallback(() => {
    onNavigate('TODAY');
  }, [onNavigate]);
  return (
    <S.Container>
      <S.DateContainer>
        <Tooltip title="Hoje" aria-label="Hoje">
          <S.IconButton type="button" aria-label="Hoje" onClick={handleToToday}>
            <EventOutlinedIcon fontSize="small" color="primary" />
          </S.IconButton>
        </Tooltip>
        <Tooltip title="Anterior" aria-label="Anterior">
          <S.IconButton
            type="button"
            aria-label="Anterior"
            onClick={handleToPrev}>
            <ArrowBackIosOutlinedIcon fontSize="small" color="primary" />
          </S.IconButton>
        </Tooltip>
        <S.DateText>{label}</S.DateText>
        <Tooltip title="Proximo" aria-label="Proximo">
          <S.IconButton
            type="button"
            aria-label="Proximo"
            onClick={handleToNext}>
            <ArrowForwardIosOutlinedIcon fontSize="small" color="primary" />
          </S.IconButton>
        </Tooltip>
      </S.DateContainer>
      <S.ActionsContainer>
        <Tooltip title="Mês" aria-label="Mês">
          <S.IconButton
            type="button"
            aria-label="Mês"
            onClick={handleToViewMonth}>
            <ViewModuleOutlinedIcon fontSize="small" color="primary" />
          </S.IconButton>
        </Tooltip>
        <Tooltip title="Semana" aria-label="Semana">
          <S.IconButton
            type="button"
            aria-label="Semana"
            onClick={handleToViewWeek}>
            <ViewColumnOutlinedIcon fontSize="small" color="primary" />
          </S.IconButton>
        </Tooltip>
        <Tooltip title="Semana de trabalho" aria-label="semana de trabalho">
          <S.IconButton
            type="button"
            aria-label="semana de trabalho"
            onClick={handleToViewWorkWeek}>
            <ViewArrayOutlinedIcon fontSize="small" color="primary" />
          </S.IconButton>
        </Tooltip>
        <Tooltip title="Dia" aria-label="Dia">
          <S.IconButton
            type="button"
            aria-label="Dia"
            onClick={handleToViewDay}>
            <ViewDayOutlinedIcon fontSize="small" color="primary" />
          </S.IconButton>
        </Tooltip>
      </S.ActionsContainer>
    </S.Container>
  );
};

export default CalendarToolbar;
