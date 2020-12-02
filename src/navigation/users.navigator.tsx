import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { UsersListScreen } from '../scenes/user/user-list.component';
import { UserScreen } from '../scenes/user/articles.component';
import { TaiKhoanScreen } from '../scenes/user/tai-khoan.component';
import { LuuTruScreen } from '../scenes/user/luu-tru.component';
import { CaiDatScreen } from '../scenes/user/cai-dat.component';

const TopTab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const UserMenuNavigator = (): React.ReactElement => (
  <TopTab.Navigator tabBar={(props) => <UserScreen {...props}/>}>
    <TopTab.Screen name='UsersListScreen' component={UsersListScreen}/>
  </TopTab.Navigator>
);


export const UsersNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name='User' component={UserMenuNavigator}/>
    <Stack.Screen name='TaiKhoan' component={TaiKhoanScreen}/>
    <Stack.Screen name='LuuTru' component={LuuTruScreen}/>
    <Stack.Screen name='CaiDat' component={CaiDatScreen}/>
  </Stack.Navigator>
);
