import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {selectAuth} from 'store/auth/selectors';
import BottomNavigation from './bottom-navigation';
import SplashNavigation from './splash-navigation';
import {fetchLoginData} from 'store/auth/actions';
import {useDispatch} from 'react-redux';

const RootNavigation = () => {
  const dispatch = useDispatch();
  const {authData, loading, hasErrors} = useSelector(selectAuth);

  useEffect(() => {
    setTimeout(() => {
      if (!authData) {
        dispatch(fetchLoginData());
      }
    }, 1500);
  }, [authData, dispatch]);

  return (
    <NavigationContainer>
      {authData ? <BottomNavigation /> : <SplashNavigation />}
    </NavigationContainer>
  );
};

export default RootNavigation;
