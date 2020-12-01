import React from 'react';
import { StyleSheet } from 'react-native';
import { Divider } from '@ui-kitten/components';
import { SafeAreaLayout } from '../../components/safe-area-layout.component';

import TopNavigationDefault from '../../components/top-navigation-default.component';


export const LazadaScreen = ({ navigation }): React.ReactElement => {
    return (
        <SafeAreaLayout style={styles.safeArea} insets="top">
            <TopNavigationDefault />
            <Divider />
        </SafeAreaLayout>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    searchContainer: {
        paddingHorizontal: 16,
        paddingTop: 16,
        paddingBottom: 16,
    },
});
