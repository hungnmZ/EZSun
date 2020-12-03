import React from 'react';
import { TopNavigation, TopNavigationAction, Input } from '@ui-kitten/components';
import { BellOutlineIcon, SearchIcon } from './icons';

const TopNavigationDefault = ({ navigation, name }): React.ReactElement => {
    const onNotificationPress = (): void => {
        navigation.navigate('Notification',);
    };
    const onSearchPress = (): void => {
        navigation.navigate('Search', { routeName: name });
    }
    const renderSearchAction = (): React.ReactElement => (
        <TopNavigationAction icon={SearchIcon} onPress={() => onSearchPress()} />
    );
    const renderNotificationAction = (): React.ReactElement => (
        <TopNavigationAction icon={BellOutlineIcon} onPress={() => onNotificationPress()} />
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
