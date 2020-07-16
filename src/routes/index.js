import React from 'react';
import { useSelector } from 'react-redux';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

const Routes = () => {
  const { signed } = useSelector((state) => state.auth);

  return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
