import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from '../../components/Layout';
import HomePage from '../../pages/home/HomePage';
import LoginPage from '../../pages/login/LoginPage';
import SignUpPage from '../../pages/signUp/SignUpPage';
import ProfilePage from '../../pages/profile/ProfilePage';
import { ROUTES } from '../routes';

const AppRouter = () => (
  <Routes>
    <Route path={ROUTES.HOME} element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.SIGNUP} element={<SignUpPage />} />
      <Route path={ROUTES.PROFILE} element={<ProfilePage />} />
      <Route path={ROUTES.PROFILE_ACTION} element={<ProfilePage />} />
    </Route>
  </Routes>
);

export default AppRouter;
