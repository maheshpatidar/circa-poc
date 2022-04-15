import * as React from 'react';
import {Image, View} from 'react-native';
import AppText from 'components/AppText';
import Button from 'components/Button';
import Strings from 'locale';
import EStyleSheet from 'react-native-extended-stylesheet';
import Colors from 'theme/colors';

const PropertyItem = ({name, location}) => {
  return (
    <View style={style.container}>
      <Image source={require('assets/images/user.png')} style={style.user} />
      <View style={style.textContainer}>
        <AppText variant="h4" color={Colors.grayscale.iron}>
          {name}
        </AppText>
        <AppText
          variant="caption"
          color={Colors.grayscale.graphite}
          style={style.location}>
          {location}
        </AppText>
        <View style={style.buttonContainer}>
          <Button
            variant="outline"
            color={Colors.primary.midnight}
            onPress={() => {}}>
            {Strings.common.call}
          </Button>
          <Button
            variant="outline"
            color={Colors.primary.midnight}
            style={style.email}
            onPress={() => {}}>
            {Strings.common.email}
          </Button>
        </View>
      </View>
    </View>
  );
};

const style = EStyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.grayscale.white,
    shadowOffset: {width: 0, height: 4},
    shadowColor: '#7090B0',
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 3,
    borderRadius: 12,
    padding: 16,
    marginTop: 12,
    marginHorizontal: 16,
  },
  textContainer: {
    marginHorizontal: 14,
  },
  user: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  location: {
    marginTop: 4,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  email: {
    marginStart: 24,
  },
});

export default PropertyItem;
