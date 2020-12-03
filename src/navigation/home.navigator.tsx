import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HotNavigator } from './hot.navigator';
import { ShopeeNavigator } from './shopee.navigator';
import { TikiNavigator } from './tiki.navigator';
import { LazadaNavigator } from './lazada.navigator';
import { HomeBottomNavigation } from '../scenes/home/home-bottom-navigation.component';
import { createStackNavigator } from '@react-navigation/stack';
import { NotificationScreen } from '../scenes/notification/notification.component';
import { SearchScreen } from '../scenes/search/search.component';
import { UsersNavigator } from './users.navigator';

const BottomTab = createBottomTabNavigator();

const Stack = createStackNavigator();

const BottomNavigator = (): React.ReactElement => {
    return (
        <BottomTab.Navigator
            initialRouteName='Hot'
            tabBar={(props) => <HomeBottomNavigation {...props} />}
        >
            <BottomTab.Screen name='Hot' component={HotNavigator} />
            <BottomTab.Screen name='Shopee' component={ShopeeNavigator} />
            <BottomTab.Screen name='Tiki' component={TikiNavigator} />
            <BottomTab.Screen name='Lazada' component={LazadaNavigator} />
            <BottomTab.Screen name='User' component={UsersNavigator} />
        </BottomTab.Navigator>
    );
};

export const HomeNavigator = (): React.ReactElement => {
    return (
        <Stack.Navigator headerMode='none'>
            <Stack.Screen name='Home' component={BottomNavigator} />
            <Stack.Screen name='Notification' component={NotificationScreen} />
            <Stack.Screen name='Search' component={SearchScreen} />
        </Stack.Navigator>
    );
};
