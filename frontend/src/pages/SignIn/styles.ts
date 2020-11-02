import {Typography} from '@material-ui/core';
import ContainerMUI from '@material-ui/core/Container';
import styled from 'styled-components';

export const Container = styled(ContainerMUI).attrs({
  component: 'main',
  variant: 'xs',
})``;
export const Paper = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled(Typography).attrs({
  component: 'h1',
  variant: 'h5',
})``;
