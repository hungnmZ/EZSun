import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TikiScreen } from '../scenes/tiki/tiki.component';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { FlashSaleScreen } from '../scenes/tiki/tiki-flashsale.component';
import { DiscountScreen } from '../scenes/tiki/tiki-discount.component';

const Stack = createStackNavigator();
const TopTab = createMaterialTopTabNavigator();

const TikiMenuNavigator = (): React.ReactElement => (
    <TopTab.Navigator tabBar={(props) => <TikiScreen {...props} />}>
        <TopTab.Screen name='TikiFlashSale' component={FlashSaleScreen} />
        <TopTab.Screen name='TikiDiscount' component={DiscountScreen} />
    </TopTab.Navigator>
);


export const TikiNavigator = (): React.ReactElement => (
    <Stack.Navigator headerMode='none'>
        <Stack.Screen name='Tiki' component={TikiMenuNavigator} />
    </Stack.Navigator>
);
