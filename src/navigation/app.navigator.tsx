import React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { HomeNavigator } from './home.navigator';
import useAuth from '../hooks/useAuth';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../layouts/auth/sign-in/index';
import SignUp from '../layouts/auth/sign-up/index';
import { SplashImage } from '../components/splash-image.component';

/*
 * Navigation theming: https://reactnavigation.org/docs/en/next/themes.html
 */
const navigatorTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        // prevent layout blinking when performing navigation
        background: 'transparent',
    },
};

const Stack = createStackNavigator();

export const AppNavigator = (): React.ReactElement => {
    const { auth, isInitializing } = useAuth();

    if (isInitializing) {
        return <Splash isInitializing />;
    }

    return (
        <NavigationContainer theme={navigatorTheme}>
            {auth == null ? (
                <Stack.Navigator headerMode='none'>
                    <Stack.Screen name='SignInScreen' component={Login} />
                    <Stack.Screen name='SignUpScreen' component={SignUp} />
                </Stack.Navigator>
            ) : (
                <HomeNavigator />
            )}
        </NavigationContainer>
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
