import React from 'react';
import { TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { BellOutlineIcon, SearchIcon } from './icons';

const TopNavigationDefault = (): React.ReactElement => {
    const renderSearchAction = (): React.ReactElement => (
        <TopNavigationAction icon={SearchIcon} onPress={() => {}} />
    );

    const renderNotificationAction = (): React.ReactElement => (
        <TopNavigationAction icon={BellOutlineIcon} onPress={() => {}} />
    );

    return (
        <TopNavigation
            title="EZSun"
            leftControl={renderSearchAction()}
            rightControls={renderNotificationAction()}
        />
    );
};

export default TopNavigationDefault;
