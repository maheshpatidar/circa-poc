import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from 'screens/splash';

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
