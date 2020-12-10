import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { UsersListScreen } from '../scenes/user/user-list.component';
import { TaiKhoanScreen } from '../scenes/user/tai-khoan.component';
import { LuuTruScreen } from '../scenes/user/luu-tru.component';
import { CaiDatScreen } from '../scenes/user/cai-dat.component';
import { ThemesScreen } from '../scenes/themes/themes.component';
import { DoiMatKhauScreen } from '../../src/layouts/user/cai-dat/component_caidat/doi-mat-khau.component';
const Stack = createStackNavigator();

export const UsersNavigator = (): React.ReactElement => (
    <Stack.Navigator headerMode='none'>
        <Stack.Screen name='User' component={UsersListScreen} />
        <Stack.Screen name='TaiKhoan' component={TaiKhoanScreen} />
        <Stack.Screen name='LuuTru' component={LuuTruScreen} />
        <Stack.Screen name='CaiDat' component={CaiDatScreen} />
        <Stack.Screen name='Theme' component={ThemesScreen} />
        <Stack.Screen name='DoiMatKhau' component={DoiMatKhauScreen} />
    </Stack.Navigator>
);
