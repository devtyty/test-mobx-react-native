/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';

import {observer} from 'mobx-react';
import {NavigationContainer} from '@react-navigation/native';
import {AppStack} from './src/config/navigation';
import AppStore from './src/stores/app';
import AppApi from './src/apis/app';
import AppContext from './src/AppContext';

const store = new AppStore();
const api = new AppApi(store);

const App = () => {
  return (
    <AppContext.Provider value={{store, api}}>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </AppContext.Provider>
  );
};

export default observer(App);
