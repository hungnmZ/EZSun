import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TikiScreen } from '../scenes/tiki/tiki.component';

const Stack = createStackNavigator();

export const TikiNavigator = (): React.ReactElement => (
    <Stack.Navigator headerMode='none'>
        <Stack.Screen name='Tiki' component={TikiScreen} />
    </Stack.Navigator>
);
