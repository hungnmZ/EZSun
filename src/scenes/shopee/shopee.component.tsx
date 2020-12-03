import React from 'react';
import { Tab } from '@ui-kitten/components';
import { SafeAreaLayout } from '../../components/safe-area-layout.component';
import TopNavigationDefault from '../../components/top-navigation-default.component';
import { BrandTabBar } from '../../components/brand-tab-bar.component';
import { PricetagsOutLineIcon, FlashOutLineIcon } from '../../components/icons';

export const ShopeeScreen = ({ navigation, state }): React.ReactElement => {
    const onTabSelect = (index: number): void => {
        navigation.navigate(state.routeNames[index]);
    };

    return (
        <SafeAreaLayout insets='top'>
            <TopNavigationDefault navigation={navigation} />
            <BrandTabBar selectedIndex={state.index} onSelect={onTabSelect}>
                <Tab icon={FlashOutLineIcon} />
                <Tab icon={PricetagsOutLineIcon} />
            </BrandTabBar>
        </SafeAreaLayout>
    );
};
