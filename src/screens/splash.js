import React from 'react';
import {Image, StatusBar, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Colors from 'theme/colors';

const Splash = () => {
  return (
    <>
      <StatusBar hidden />
      <LinearGradient
        colors={[Colors.primary.midnight, Colors.primary.periwinkle]}
        style={style.linearGradient}>
        <Image source={require('assets/images/logo.png')} />
      </LinearGradient>
    </>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  linearGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Splash;
