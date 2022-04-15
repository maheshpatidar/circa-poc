import React from 'react';
import {StyleSheet, Text} from 'react-native';

const AppText = ({children, variant = 'p', color, style = {}}) => {
  const textColorStyle = color ? {color: color} : {};

  const textStyle = [localStyle[variant], textColorStyle, style];

  return <Text style={textStyle}>{children}</Text>;
};

const localStyle = StyleSheet.compose({
  billboard: {
    fontSize: 40,
    lineHeight: 48,
    fontWeight: 'bold',
  },
  h1: {
    fontSize: 24,
  },
  h2: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  h3: {
    fontSize: 18,
    lineHeight: 24,
  },
  h4: {
    fontSize: 16,
    lineHeight: 16,
  },
  p: {
    fontSize: 16,
    lineHeight: 20,
  },
  caption: {
    fontSize: 14,
  },
  caption2: {
    fontSize: 12,
  },
  badge2: {
    fontSize: 11,
  },
});

export default AppText;
