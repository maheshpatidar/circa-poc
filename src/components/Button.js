import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from 'theme/colors';

const Button = ({
  children,
  variant = 'outline',
  color = Colors.grayscale.white,
  style = {},
  onPress = () => {},
}) => {
  const textColorStyle = color ? {color: color, borderColor: color} : {};

  const textStyle = [localStyle[variant], textColorStyle];

  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const localStyle = StyleSheet.compose({
  outline: {
    fontSize: 10,
    lineHeight: 16,
    borderColor: Colors.grayscale.white,
    borderWidth: 1,
    borderRadius: 15,
    alignSelf: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 5,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
});

export default Button;
