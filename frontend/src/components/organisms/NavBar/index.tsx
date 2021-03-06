import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import React, {useCallback} from 'react';
import {NavLink} from 'react-router-dom';
import logoMain from '~/assets/images/logo-main/mainLogo.png';
import {useAuth} from '~/hooks/auth';
import {ROUTER_NAME} from '~/routes/constants';
import * as S from './styles';

const NavBar: React.FC = () => {
  const {signOut} = useAuth();
  const handleLogout = useCallback(() => {
    signOut();
  }, [signOut]);
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <S.Logo src={logoMain} alt="Brain Art" />
          <S.MenuContainer>
            <S.MenuItem>
              <NavLink
                key="HOME"
                className="nav-content"
                exact
                activeClassName="current"
                to="/">
                <S.ScheduleIcon />
                Agenda
              </NavLink>
            </S.MenuItem>
            <S.MenuItem>
              <NavLink
                key="Prontuario"
                className="nav-content"
                activeClassName="current"
                to={ROUTER_NAME.MEDICAL_RECORD}>
                <S.AssignmentIcon />
                Prontuario
              </NavLink>
            </S.MenuItem>
            <S.MenuItem>
              <NavLink
                key="Financeiro"
                className="nav-content"
                activeClassName="current"
                to={ROUTER_NAME.FINANCE}>
                <S.MdAccountBalanceWalletIcon />
                Financeiro
              </NavLink>
            </S.MenuItem>
          </S.MenuContainer>
          <Tooltip title="Sair" aria-label="sair">
            <IconButton
              aria-label="sair"
              aria-haspopup="true"
              onClick={handleLogout}
              color="inherit">
              <S.Logout />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default NavBar;
