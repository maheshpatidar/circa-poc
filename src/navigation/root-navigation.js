import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchLoginData} from 'store/auth/actions';
import {selectAuth} from 'store/auth/selectors';

import {NavigationContainer} from '@react-navigation/native';

import BottomNavigation from './bottom-navigation';
import SplashNavigation from './splash-navigation';

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
