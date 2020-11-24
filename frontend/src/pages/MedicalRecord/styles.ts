import DividerMUI from '@material-ui/core/Divider';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
`;
export const PaperLeft = styled.div`
  flex: 2;
  border-right: 1px solid #ccc;
`;
export const HeaderLeft = styled(Paper)`
  padding: 8px 4px;
  height: 60px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
`;
export const HeaderLeftInput = styled(InputBase)`
  margin-left: 4px;
  flex: 2;
`;
export const Divider = styled(DividerMUI)`
  height: 28px;
  margin: 4px;
`;
export const ListaPatient = styled.div``;
export const PatientCard = styled.div`
  display: flex;
  width: 100%;
  background: #f7f7f7;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  align-items: center;
  cursor: pointer;
  :hover {
    background: #f1f1f1;
  }
`;
export const PatientAvatar = styled.div`
  width: 60px;
  height: 60px;
  background: #454;
`;
export const PatientContent = styled.div`
  flex: 1;
  padding-left: 8px;
`;
export const PatientName = styled(Typography).attrs({
  component: 'h6',
  variant: 'h6',
})`
  text-align: center;
`;
export const PatientDescription = styled(Typography).attrs({
  component: 'p',
  variant: 'inherit',
  color: 'textSecondary',
})``;

// =--------------------------___
export const PaperRight = styled.div`
  flex: 4;
`;

export const ListaSessions = styled.div``;
export const SessionName = styled.p``;
export const SessionsCard = styled.div`
  display: flex;
  width: 100%;
  background: #f4f4f4;
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;
export const Title = styled.h1``;
