import {CardActions} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

export const Container = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  width: 180px;
`;
export const Content = styled(CardContent)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;
export const Actions = styled(CardActions)``;
export const IconContainer = styled.div`
  padding-right: 10px;
`;

export const NameText = styled(Typography).attrs({
  component: 'p',
  variant: 'caption',
})``;
