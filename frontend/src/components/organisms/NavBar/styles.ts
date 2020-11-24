import {darken} from '@material-ui/core';
import {
  MdAccountBalanceWallet,
  MdAssignmentInd,
  MdEventNote,
  MdExitToApp,
} from 'react-icons/md';
import styled from 'styled-components';

export const MenuItem = styled.div`
  padding-left: 10px;
  padding-right: 10px;

  .nav-content {
    color: ${(props) => darken(props.theme.palette.grey[50], 0)};
    font-family: ${(props) => props.theme.typography.fontFamily};
    font-size: ${(props) => props.theme.typography.subtitle2.fontSize};
    text-decoration: none;
    width: 100%;
    display: flex;
    align-items: center;
  }

  .current {
    position: relative;
    transition: border-bottom 0.5s ease-in-out;
  }

  .current::before {
    content: '';
    position: absolute;
    top: 39px;
    height: 2px;
    width: 100%;
    background: #fff;
  }
`;
export const ScheduleIcon = styled(MdEventNote)`
  color: #fff;
  margin-right: 8px;
  font-size: 20px;
`;
export const AssignmentIcon = styled(MdAssignmentInd)`
  color: #fff;
  margin-right: 8px;
  font-size: 20px;
`;
export const MdAccountBalanceWalletIcon = styled(MdAccountBalanceWallet)`
  color: #fff;
  margin-right: 8px;
  font-size: 20px;
`;
export const Logout = styled(MdExitToApp)`
  color: #fff;
  font-size: 20px;
`;
export const MenuContainer = styled.div`
  display: flex;
  flex: 1;
`;
export const Logo = styled.img``;
