import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HotScreen } from '../scenes/hot/hot.component';

const Stack = createStackNavigator();

export const HotNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name='Hot' component={HotScreen} />

  </Stack.Navigator>
);
