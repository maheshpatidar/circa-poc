import React from 'react';
import {View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Modal from 'react-native-modal';
import Colors from 'theme/colors';

const ModalWrapper = ({isVisible = false, children, onDismiss}) => {
  return (
    <Modal
      style={styles.modal}
      avoidKeyboard
      isVisible={isVisible}
      backdropOpacity={0.45}
      onBackButtonPress={onDismiss}
      onBackdropPress={onDismiss}>
      <View style={styles.container}>{children}</View>
    </Modal>
  );
};

const styles = EStyleSheet.create({
  modal: {
    flex: 1,
    margin: 0,
    justifyContent: 'flex-end',
  },
  container: {
    backgroundColor: Colors.grayscale.white,
    width: '100%',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingBottom: 64,
    paddingTop: 24,
    paddingHorizontal: 24,
  },
});

export default ModalWrapper;
