import IconButtonMUI from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

export const Container = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;
`;
export const ContainerEdit = styled.div`
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

export const Title = styled(Typography).attrs({
  component: 'h6',
  variant: 'subtitle1',
})`
  margin-left: 10px;
  flex: 1;
`;

export const IconButton = styled(IconButtonMUI)``;
export const Content = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
`;
export const LoadingContainer = styled.div`
  position: absolute;
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

export const PaginationContainer = styled.div`
  border-top: 1px solid #ccc;
  align-items: center;
`;
export const ContainerRecord = styled.div`
  border-top: 1px solid #ccc;
  align-items: center;
`;
export const NotSelectPatient = styled.div`
  display: flex;
  flex: 1;
  /* align-items: center; */
  justify-content: center;
`;
export const NotSelectPatientText = styled(Typography).attrs({
  component: 'h6',
  variant: 'h6',
})`
  text-transform: uppercase;
  color: ${(props) => props.theme.palette.grey[300]};
`;