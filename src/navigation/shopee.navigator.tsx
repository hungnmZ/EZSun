import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ShopeeScreen } from '../scenes/shopee/shopee.component';

const Stack = createStackNavigator();

export const ShopeeNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name='Shopee' component={ShopeeScreen} />
  </Stack.Navigator>
);
