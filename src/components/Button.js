import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
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

const localStyle = EStyleSheet.create({
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
