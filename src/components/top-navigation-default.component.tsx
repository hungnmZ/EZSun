import React from 'react';
import {
    TopNavigation,
    TopNavigationAction,
    Input,
} from '@ui-kitten/components';
import { BellOutlineIcon, SearchIcon } from './icons';

const TopNavigationDefault = ({ navigation }): React.ReactElement => {
    const renderSearchAction = (): React.ReactElement => (
        <TopNavigationAction
            icon={SearchIcon}
            onPress={() => navigation.navigate('Search')}
        />
    );
    const renderNotificationAction = (): React.ReactElement => (
        <TopNavigationAction
            icon={BellOutlineIcon}
            onPress={() => navigation.navigate('Notification')}
        />
    );

    return (
        <TopNavigation
            title='EZSun'
            leftControl={renderSearchAction()}
            rightControls={renderNotificationAction()}
        />
    );
};

export default TopNavigationDefault;
