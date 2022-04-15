import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import AppText from 'components/AppText';
import ModalWrapper from 'container/ModalWrapper';
import EStyleSheet from 'react-native-extended-stylesheet';
import Colors from 'theme/colors';

const LeaseDropDown = ({
  isVisible = false,
  options,
  selectedOption = '',
  onSelect,
  onDismiss,
}) => {
  return (
    <ModalWrapper isVisible={isVisible} onDismiss={onDismiss}>
      {options?.map(value => {
        const isSelected = value === selectedOption;
        const boxStyle = isSelected
          ? styles.selectedOptionContainer
          : styles.optionContainer;

        return (
          <TouchableOpacity
            key={value.leaseId}
            onPress={() => {
              onDismiss();
              onSelect && onSelect(value);
            }}>
            <View style={boxStyle}>
              <AppText variant="h2" color={Colors.primary.midnight}>
                {value?.unitDisplayName}
              </AppText>
            </View>
          </TouchableOpacity>
        );
      })}
    </ModalWrapper>
  );
};

const styles = EStyleSheet.create({
  optionContainer: {
    padding: 20,
    alignItems: 'center',
  },
  selectedOptionContainer: {
    padding: 20,
  },
});

export default LeaseDropDown;
