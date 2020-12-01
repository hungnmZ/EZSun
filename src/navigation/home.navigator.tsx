import React from 'react';
import { RouteProp } from '@react-navigation/core';
import {
    BottomTabNavigationOptions,
    createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import { HotNavigator } from './hot.navigator';
import { LayoutsNavigator } from './layouts.navigator';
import { ComponentsNavigator } from './components.navigator';
import { ThemesNavigator } from './themes.navigator';
import { HomeBottomNavigation } from '../scenes/home/home-bottom-navigation.component';
import Login from '../layouts/auth/sign-in/index';
import SignUp from '../layouts/auth/sign-up/index';
import useAuth from '../hooks/useAuth';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const BottomTab = createBottomTabNavigator();

/*
 * When dev is true in .expo/settings.json (started via `start:dev`),
 * open Components tab as default.
 */
const initialTabRoute: string = __DEV__ ? 'Hot' : 'Hot';

/*
 * Can we access it from `HomeNavigator`?
 */
const ROOT_ROUTES: string[] = ['Hot', 'Layouts', 'Components', 'Themes'];

const isOneOfRootRoutes = (currentRoute: RouteProp<any, any>): boolean => {
    return (
        ROOT_ROUTES.find((route) => currentRoute.name === route) !== undefined
    );
};

const TabBarVisibleOnRootScreenOptions = ({
    route,
}): BottomTabNavigationOptions => {
    const currentRoute = route.state && route.state.routes[route.state.index];
    return { tabBarVisible: currentRoute && isOneOfRootRoutes(currentRoute) };
};

export const HomeNavigator = (): React.ReactElement => {
  const {auth} = useAuth();

  if (auth == null) {
    return (
      <Stack.Navigator headerMode='none'>
        <Stack.Screen name='SignInScreen' component={Login} />
        <Stack.Screen name='SignUpScreen' component={SignUp} />
      </Stack.Navigator>
    );
  }

  return (
    <BottomTab.Navigator
        screenOptions={TabBarVisibleOnRootScreenOptions}
        initialRouteName={initialTabRoute}
        tabBar={(props) => <HomeBottomNavigation {...props} />}
    >
        <BottomTab.Screen name='Hot' component={HotNavigator} />
        <BottomTab.Screen name='Layouts' component={LayoutsNavigator} />
        <BottomTab.Screen name='Components' component={ComponentsNavigator} />
        <BottomTab.Screen name='Themes' component={ThemesNavigator} />
    </BottomTab.Navigator >
  );
};
