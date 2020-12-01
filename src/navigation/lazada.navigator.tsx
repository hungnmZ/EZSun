import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LazadaScreen } from '../scenes/lazada/lazada.component';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { FlashSaleScreen } from '../scenes/lazada/lazada-flash-sale.component';
import { DiscountScreen } from '../scenes/lazada/lazada-discount.component';

const Stack = createStackNavigator();
const TopTab = createMaterialTopTabNavigator();

const LazadaMenuNavigator = (): React.ReactElement => (
    <TopTab.Navigator tabBar={(props) => <LazadaScreen {...props} />}>
        <TopTab.Screen name='LazadaFlashSale' component={FlashSaleScreen} />
        <TopTab.Screen name='LazadaDiscount' component={DiscountScreen} />
    </TopTab.Navigator>
);

export const LazadaNavigator = (): React.ReactElement => (
    <Stack.Navigator headerMode='none'>
        <Stack.Screen name='Lazada' component={LazadaMenuNavigator} />
    </Stack.Navigator>
);
