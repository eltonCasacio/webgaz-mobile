import React from 'react';
import {useAuth} from '../contexts/auth';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

import Loading from '../components/Loading';

const Routes: React.FC = () => {
  const {signed, loading} = useAuth();

  if (loading) return <Loading size="small" color="#f00" />;

  // return signed ? <AppRoutes /> : <AuthRoutes />;
  return <AppRoutes />;
};

export default Routes;
