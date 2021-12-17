import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from '../screens/home';
import UserPage from '../screens/user';
import PostPage from '../screens/post';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName="/">
      <Stack.Screen name="/" component={HomePage} />
      <Stack.Screen name="/user" component={UserPage} />
      <Stack.Screen name="Post" component={PostPage} />
    </Stack.Navigator>
  );
};

export {AppStack};
