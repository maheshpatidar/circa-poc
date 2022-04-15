import React from 'react';
import Dashboard from 'screens/dashboard';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BottomTabItem from 'container/BottomTabItem';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import DefaultScreen from 'screens/default';

const Tab = createBottomTabNavigator();

const homeIcon = require('assets/icons/home.png');
const planIcon = require('assets/icons/plans.png');
const walletIcon = require('assets/icons/wallet.png');
const paymentIcon = require('assets/icons/payments.png');
const settingsIcon = require('assets/icons/settings.png');

const getTabScreen = (name, component, icon) => (
  <Tab.Screen
    name={name}
    component={component}
    options={{
      tabBarIcon: ({focused, color, size}) => (
        <BottomTabItem icon={icon} focused={focused} />
      ),
    }}
  />
);

const BottomNavigation = () => {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'relative',
          height: insets.bottom + 70,
          top: -12,
          marginBottom: -12,
          alignItems: 'center',
          paddingHorizontal: 20,
          shadowOffset: {width: 0, height: 0},
          shadowColor: '#7090B0',
          shadowOpacity: 0.2,
          shadowRadius: 5,
          elevation: 3,
          zIndex: 0,
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
        },
      }}>
      {getTabScreen('Dashboard', Dashboard, homeIcon)}
      {getTabScreen('Plan', DefaultScreen, planIcon)}
      {getTabScreen('Wallet', DefaultScreen, walletIcon)}
      {getTabScreen('Payment', DefaultScreen, paymentIcon)}
      {getTabScreen('Settings', DefaultScreen, settingsIcon)}
    </Tab.Navigator>
  );
};

export default BottomNavigation;
