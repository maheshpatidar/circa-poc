import * as React from 'react';
import {View} from 'react-native';
import PageWrapper from 'container/PageWrapper';
import EStyleSheet from 'react-native-extended-stylesheet';
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

const style = EStyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: Colors.grayscale.white,
  },
});

export default DefaultScreen;
