import React from 'react';
import { StyleSheet } from 'react-native';
import { Divider, Tab } from '@ui-kitten/components';
import { SafeAreaLayout } from '../../components/safe-area-layout.component';

import TopNavigationDefault from '../../components/top-navigation-default.component';
import { BrandTabBar } from '../../components/brand-tab-bar.component';
import { FlashOutLineIcon, PricetagsOutLineIcon } from '../../components/icons';


export const LazadaScreen = ({ navigation, state }): React.ReactElement => {
    const onTabSelect = (index: number): void => {
        navigation.navigate(state.routeNames[index]);
    };

    return (
        <SafeAreaLayout insets='top'>
            <TopNavigationDefault navigation={navigation} />
            <BrandTabBar
                selectedIndex={state.index}
                onSelect={onTabSelect}>
                <Tab icon={FlashOutLineIcon} />
                <Tab icon={PricetagsOutLineIcon} />
            </BrandTabBar>
        </SafeAreaLayout>
    );
};