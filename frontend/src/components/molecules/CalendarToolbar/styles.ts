import IconButtonMUI from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
  padding: 10px;
`;
export const DateContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;
export const ActionsContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;
export const IconButton = styled(IconButtonMUI)``;

export const DateText = styled(Typography).attrs({
  component: 'p',
  variant: 'subtitle2',
  color: 'textSecondary',
})`
  padding-left: 5px;
  padding-right: 5px;
`;
