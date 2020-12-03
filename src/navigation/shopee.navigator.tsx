import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { FlashSaleScreen } from '../scenes/shopee/shopee-flashsale.component';
import { DiscountScreen } from '../scenes/shopee/shopee-discount.component';
import { ShopeeScreen } from '../scenes/shopee/shopee.component';

const Stack = createStackNavigator();
const TopTab = createMaterialTopTabNavigator();

const ShopeeMenuNavigator = (): React.ReactElement => (
  <TopTab.Navigator tabBar={(props) => <ShopeeScreen {...props} />}>
    <TopTab.Screen name='ShopeeFlashSale' component={FlashSaleScreen} />
    <TopTab.Screen name='ShopeeDiscount' component={DiscountScreen} />
  </TopTab.Navigator>
);

export const ShopeeNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name='Shopee' component={ShopeeMenuNavigator} />
  </Stack.Navigator>
);
