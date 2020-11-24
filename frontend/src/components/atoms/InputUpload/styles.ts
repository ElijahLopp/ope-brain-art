import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

export const Container = styled.div``;
export const Input = styled.input`
  display: none;
`;
export const NameFile = styled(Typography).attrs({
  component: 'span',
  variant: 'subtitle1',
})`
  border-bottom: 1px solid #ccc;
`;
