import DividerMUI from '@material-ui/core/Divider';
import IconButtonMUI from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

export const Container = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  padding: 8px 14px;
  height: 60px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
`;

export const Avatar = styled.div`
  width: 50px;
  height: 50px;
  background: #454;
`;
export const ContainerRecord = styled.div`
  overflow-y: scroll;
  height: calc(100vh - 125px);
  padding: 20px;
`;
export const AttachmentsList = styled.div``;
export const AttachmentsTitle = styled(Typography).attrs({
  component: 'p',
  variant: 'subtitle1',
  color: 'textSecondary',
})`
  margin-top: 10px;
`;

export const Title = styled(Typography).attrs({
  component: 'h6',
  variant: 'subtitle1',
})`
  margin-left: 10px;
  flex: 1;
`;
export const DescriptionRecord = styled.div``;
export const IconButton = styled(IconButtonMUI)``;

export const Divider = styled(DividerMUI)`
  margin-top: 20px;
`;
