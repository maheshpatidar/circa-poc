import React from 'react';
import Splash from 'screens/splash';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const SplashNavigation = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Splash" component={Splash} />
  </Stack.Navigator>
);

export default SplashNavigation;
