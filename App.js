import React from 'react';
import RootNavigation from 'navigation/root-navigation';
import {Provider} from 'react-redux';
import {store} from 'store/config-store';
import {SafeAreaProvider} from 'react-native-safe-area-context';

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
