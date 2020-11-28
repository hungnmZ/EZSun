import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LayoutsScreen } from '../scenes/layouts/layouts.component';

const Stack = createStackNavigator();

export const LayoutsNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name='Layouts' component={LayoutsScreen}/>
  </Stack.Navigator>
);
