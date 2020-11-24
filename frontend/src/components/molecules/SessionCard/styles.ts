import IconButtonMUI from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FolderOpenOutlinedIcon from '@material-ui/icons/FolderOpenOutlined';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  background: #fff;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  align-items: center;
  :nth-child(odd) {
    background: #f9f9f9;
  }
  :hover {
    background: #e6e6e6;
  }
`;

export const Title = styled(Typography).attrs({
  component: 'p',
  variant: 'subtitle2',
  color: 'textSecondary',
})`
  margin-left: 10px;
  flex: 1;
`;
export const IconFolder = styled(FolderOpenOutlinedIcon)`
  color: #6f6f6f;
`;
export const IconButton = styled(IconButtonMUI)``;
