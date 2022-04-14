import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Colors from 'theme/colors';

const BottomTabItem = ({icon, focused}) => {
  const backgroundStyle = {
    backgroundColor: focused ? Colors.primary.midnight : Colors.grayscale.white,
  };

  const iconTintStyle = {
    tintColor: focused ? Colors.grayscale.white : Colors.primary.midnight,
  };
  return (
    <View style={[style.container, backgroundStyle]}>
      <Image source={icon} style={[style.icon, iconTintStyle]} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 22,
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default BottomTabItem;
