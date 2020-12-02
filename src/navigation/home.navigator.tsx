import React from 'react';
import { RouteProp } from '@react-navigation/core';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import { HotNavigator } from './hot.navigator';
import { ShopeeNavigator } from './shopee.navigator';
import { TikiNavigator } from './tiki.navigator';
import { LazadaNavigator } from './lazada.navigator';
import { HomeBottomNavigation } from '../scenes/home/home-bottom-navigation.component';
import Login from '../layouts/auth/sign-in/index';
import SignUp from '../layouts/auth/sign-up/index';
import useAuth from '../hooks/useAuth';
import { createStackNavigator } from '@react-navigation/stack';
import { SplashImage } from '../components/splash-image.component';
import { UsersNavigator } from './users.navigator';

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
const ROOT_ROUTES: string[] = ['Hot', 'Shopee', 'Tiki', 'Lazada'];

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
  const { auth, isInitializing } = useAuth();

  if (isInitializing) return <Splash isInitializing />

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
      <BottomTab.Screen name="Hot" component={HotNavigator} />
      <BottomTab.Screen name="Shopee" component={ShopeeNavigator} />
      <BottomTab.Screen name="Tiki" component={TikiNavigator} />
      <BottomTab.Screen name="Lazada" component={LazadaNavigator} />
      <BottomTab.Screen name="User" component={UsersNavigator} />
    </BottomTab.Navigator>
  );
};


const Splash = ({ isInitializing }): React.ReactElement => {
  return (
    <SplashImage
      loading={isInitializing}
      source={require('../assets/images/image-splash.png')}
    />
  );
};