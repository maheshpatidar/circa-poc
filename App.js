import React from 'react';
import RootNavigation from 'navigation/root-navigation';
import EStyleSheet from 'react-native-extended-stylesheet';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {store} from 'store/config-store';

EStyleSheet.build();

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <RootNavigation />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
