import React, { useContext } from 'react';
import { AuthContext } from '../../context/index';
import { Loader } from '../Loader/Loader';
import { PrivateRouters } from './PrivateRouters';
import { PublicRouters } from './PublicRouters';

export const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <Loader/>;
  }

  return (
    <>
      {isAuth ? 
        <PrivateRouters /> :
        <PublicRouters />
      }
    </>
  );
};
