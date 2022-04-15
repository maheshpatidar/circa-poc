import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import AppText from 'components/AppText';
import Button from 'components/Button';
import Strings from 'locale';
import EStyleSheet from 'react-native-extended-stylesheet';
import Colors from 'theme/colors';

const WelcomeBanner = ({onClose}) => {
  return (
    <View style={style.welcomeContainer}>
      <View style={style.topContainer}>
        <View style={style.textContainer}>
          <AppText variant="h2" color={Colors.grayscale.white}>
            {Strings.dashboard.welcome_message}
          </AppText>
          <AppText
            variant="p"
            color={Colors.grayscale.white}
            style={style.description}>
            {Strings.dashboard.welcome_description}
          </AppText>
        </View>
        <TouchableOpacity onPress={onClose} style={style.closeContainer}>
          <Image
            source={require('assets/icons/close.png')}
            style={style.close}
          />
        </TouchableOpacity>
      </View>
      <Button
        variant="outline"
        color={Colors.grayscale.white}
        style={style.learnMore}
        onPress={() => {}}>
        {Strings.common.learn_more}
      </Button>
    </View>
  );
};

const style = EStyleSheet.create({
  welcomeContainer: {
    backgroundColor: Colors.primary.periwinkle,
    paddingHorizontal: 16,
    paddingBottom: 16,
    paddingTop: 56,
  },
  topContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textContainer: {
    width: '80%',
    display: 'flex',
  },
  description: {
    marginTop: 16,
  },
  closeContainer: {
    alignSelf: 'flex-start',
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  close: {
    width: 20,
    height: 20,
  },
  learnMore: {
    marginTop: 30,
    marginBottom: 8,
    marginLeft: 13,
    alignSelf: 'flex-start',
  },
});

export default WelcomeBanner;
