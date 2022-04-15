import * as React from 'react';
import AppText from 'components/AppText';
import {StyleSheet, View} from 'react-native';
import Colors from 'theme/colors';
import {paymentDateFormatted} from 'utils/date-time-utils';

const plans = {
  onepay: '1',
  twopay: '2',
  fourpay: '4',
  onepaydeferred: '1',
};

const UpcomingEvent = ({item}) => {
  const {amount, plan, paymentDate} = item;
  return (
    <View style={style.container}>
      <View style={style.roundedRectangle}>
        <View style={style.circle}>
          <AppText variant="badge2" color={Colors.primary.midnight}>
            {plans[plan]}
          </AppText>
        </View>
      </View>
      <View style={style.textContainer}>
        <AppText variant="p" color={Colors.grayscale.graphite}>
          {`$${amount}`}
        </AppText>
        <AppText variant="p" color={Colors.grayscale.iron}>
          {paymentDateFormatted(paymentDate)}
        </AppText>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.grayscale.white,
    shadowOffset: {width: 0, height: 16},
    shadowColor: '#7090B0',
    shadowOpacity: 0.2,
    shadowRadius: 40,
    elevation: 3,
    borderRadius: 12,
    marginHorizontal: 8,
    alignSelf: 'flex-start',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  roundedRectangle: {
    width: 32,
    height: 32,
    backgroundColor: Colors.primary.lilac,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  circle: {
    width: 20,
    height: 20,
    backgroundColor: Colors.grayscale.white,
    borderColor: Colors.primary.midnight,
    borderWidth: 1.25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textContainer: {
    marginHorizontal: 16,
  },
});

export default UpcomingEvent;
