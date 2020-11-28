import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ComponentsScreen } from '../scenes/components/components.component';

const Stack = createStackNavigator();

export const ComponentsNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name='Components' component={ComponentsScreen}/>
  </Stack.Navigator>
);
