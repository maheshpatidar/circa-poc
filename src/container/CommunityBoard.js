import AppText from 'components/AppText';
import * as React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import Colors from 'theme/colors';

const PropertyManager = ({title, description, icon}) => {
  return (
    <View style={style.container}>
      <Image source={icon} style={style.icon} />
      <View style={style.textContainer}>
        <AppText variant="h4" color={Colors.grayscale.iron}>
          {title}
        </AppText>
        <AppText
          variant="caption"
          color={Colors.grayscale.graphite}
          style={style.location}>
          {description}
        </AppText>
      </View>
      <Image
        source={require('assets/icons/right_chevron.png')}
        style={style.chevron}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.grayscale.white,
    shadowOffset: {width: 0, height: 4},
    shadowColor: '#7090B0',
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 3,
    borderRadius: 12,
    alignItems: 'center',
    padding: 16,
    marginTop: 12,
    marginHorizontal: 16,
  },
  textContainer: {
    marginHorizontal: 12,
    flex: 1,
  },
  icon: {
    height: 48,
    width: 56,
    tintColor: Colors.primary.midnight,
  },
  chevron: {
    height: 18,
    width: 18,
    tintColor: Colors.grayscale.thunder,
  },
  location: {
    marginTop: 4,
  },
});

export default PropertyManager;
