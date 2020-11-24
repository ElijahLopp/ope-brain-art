import React, {createContext, useCallback, useContext, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useToasts} from 'react-toast-notifications';
import {getNamePathLocalStorageApp} from '~/config';
import api from '~/services/api';
import {AuthContextData, AuthState} from './auth.interfaces';

const AuthContext = createContext<AuthContextData>({} as AuthContextData);
const pathLocalStorage = getNamePathLocalStorageApp();

const AuthProvider: React.FC = ({children}) => {
  const {addToast} = useToasts();
  const history = useHistory();

  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem(`${pathLocalStorage}:token`);
    const userStorage = localStorage.getItem(`${pathLocalStorage}:user`);
    if (token && userStorage) {
      api.defaults.headers.Authorization = token;
      const user = JSON.parse(userStorage);
      return {
        token,
        user,
        profile: user.profile,
      };
    }
    return {} as AuthState;
  });
  const [loading, setLoading] = useState(false);

  const signIn = useCallback(
    async ({email, password, remember}) => {
      setLoading(true);
      try {
        const token = 'sdjiosd09owe0994okpoopd90swe';
        const user = {
          id: 1,
          name: 'teste',
          avatar: '',
          email,
          cpf: '22222222202',
          profile: 1,
        };
        localStorage.setItem(`${pathLocalStorage}:token`, token);
        localStorage.setItem(`${pathLocalStorage}:user`, JSON.stringify(user));

        api.defaults.headers.Authorization = token;

        setData({
          token,
          user,
          profile: user.profile,
        });

        history.replace('/');

        return true;
      } catch (err) {
        addToast('Login e/ou senha inválidos!', {
          appearance: 'error',
          autoDismiss: true,
        });
        return false;
      } finally {
        setLoading(false);
      }
    },
    [addToast, history],
  );

  const onForgotPassword = useCallback(async (login) => {
    try {
      setLoading(true);
      const credential = login.replace(/[^0-9]/g, '');
      const response = await api.get(`/auth/forgot-password/${credential}`);
      setLoading(false);
      return response.data === null;
    } catch (err) {
      const notFound = ['record not found'].includes(
        err.response.data.errorMessage,
      );
      setLoading(false);
      if (notFound) {
        return false;
      }
      throw new Error('Erro ao recuperar senha!');
    }
  }, []);

  const changePassword = useCallback(
    async (newPassword) => {
      try {
        setLoading(true);
        await api.post('/auth/reset-password', {
          newPassword,
          userToken: data.token,
        });

        const userData = {...data.user, firstAccess: false};
        setData({...data, user: userData});

        localStorage.setItem(
          `${pathLocalStorage}:user`,
          JSON.stringify(userData),
        );
        addToast('Senha redefinida com sucesso!', {
          appearance: 'success',
          autoDismiss: true,
        });
        return true;
      } catch (err) {
        addToast('Erro ao redefinir senha!', {
          appearance: 'error',
          autoDismiss: true,
        });
        return false;
      } finally {
        setLoading(false);
      }
    },
    [addToast, data],
  );
  const redefinePassword = useCallback(
    async (newPassword, token) => {
      try {
        setLoading(true);
        await api.post('/auth/reset-password', {
          newPassword,
          passwordRecoveryToken: token,
        });
        addToast('Senha redefinida com sucesso!', {
          appearance: 'success',
          autoDismiss: true,
        });
        return true;
      } catch (err) {
        addToast('Erro ao redefinir senha!', {
          appearance: 'error',
          autoDismiss: true,
        });
        return false;
      } finally {
        setLoading(false);
      }
    },
    [addToast],
  );

  const signOut = useCallback(async () => {
    localStorage.removeItem(`${pathLocalStorage}:token`);
    localStorage.removeItem(`${pathLocalStorage}:user`);
    setData({} as AuthState);
    // await api.get('/auth/logoff');
  }, []);

  return (
    <AuthContext.Provider
      value={{
        token: data.token,
        user: data.user,
        profile: data.profile,
        loading,
        signIn,
        signOut,
        onForgotPassword,
        changePassword,
        redefinePassword,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
}

export {AuthProvider, useAuth};
