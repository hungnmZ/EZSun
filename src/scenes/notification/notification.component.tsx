import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Divider, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { SafeAreaLayout } from '../../components/safe-area-layout.component';
import { ArrowIosBackIcon } from '../../components/icons';
import { NotificationList } from '../../components/notification-list.component';
import { data } from './data';


export const NotificationScreen = ({ navigation }): React.ReactElement => {
    const onItemPress = (index: number): void => {
        // navigation.navigate(data[index].route);
    };
    const BackAction = (): React.ReactElement => (
        <TopNavigationAction
            icon={ArrowIosBackIcon}
            onPress={() => navigation.goBack()}
        />
    );
    return (
        <SafeAreaLayout
            style={styles.safeArea}
            insets='top'>
            <TopNavigation
                leftControl={BackAction()}
                title='Thông báo'
            />
            <Divider />
            <NotificationList
                data={data}
                onItemPress={onItemPress}
            />
        </SafeAreaLayout>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },

});
