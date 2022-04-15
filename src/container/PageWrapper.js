import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

const PageWrapper = ({children, statusBarColor, pageColor}) => {
  const topAreaStyle = {
    flex: 0,
    backgroundColor: statusBarColor,
  };

  const pageStyle = {
    flex: 1,
    backgroundColor: pageColor,
  };

  return (
    <>
      <SafeAreaView style={topAreaStyle} />
      <StatusBar barStyle="light-content" backgroundColor={statusBarColor} />
      <SafeAreaView style={pageStyle}>{children}</SafeAreaView>
    </>
  );
};

export default PageWrapper;
