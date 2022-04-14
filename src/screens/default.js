import * as React from 'react';
import PageWrapper from 'container/PageWrapper';
import {View, StyleSheet} from 'react-native';
import Colors from 'theme/colors';

const DefaultScreen = () => {
  return (
    <PageWrapper
      statusBarColor={Colors.primary.midnight}
      pageColor={Colors.grayscale_white}>
      <View style={style.pageContainer} />
    </PageWrapper>
  );
};

const style = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: Colors.grayscale.white,
  },
});

export default DefaultScreen;
