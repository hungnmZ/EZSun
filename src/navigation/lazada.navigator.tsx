import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LazadaScreen } from '../scenes/lazada/lazada.component';

const Stack = createStackNavigator();

export const LazadaNavigator = (): React.ReactElement => (
    <Stack.Navigator headerMode='none'>
        <Stack.Screen name='Lazada' component={LazadaScreen} />
    </Stack.Navigator>
);
