import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {
    Input,
    Divider,
    TopNavigation,
    TopNavigationAction,
} from '@ui-kitten/components';
import { SafeAreaLayout } from '../../components/safe-area-layout.component';
import { ArrowIosBackIcon, SearchIcon } from '../../components/icons';

export const SearchScreen = ({ navigation }): React.ReactElement => {
    const BackAction = (): React.ReactElement => (
        <TopNavigationAction
            icon={ArrowIosBackIcon}
            onPress={() => navigation.goBack()}
        />
    );

    const [value, setValue] = useState('');

    const SearchBar = (): React.ReactElement => (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Input
                placeholder={'Search'}
                style={{
                    flex: 4,
                    borderRadius: 20,
                    top: 2,
                }}
                value={value}
                onChangeText={(nextValue) => setValue(nextValue)}
                keyboardType='web-search'
            />
            <TopNavigationAction
                icon={SearchIcon}
                style={{ flex: 1, borderRadius: 20, left: 3 }}
            />
        </View>
    );

    return (
        <SafeAreaLayout style={styles.safeArea} insets='top'>
            <TopNavigation
                leftControl={BackAction()}
                rightControls={SearchBar()}
            />
            <Divider />
        </SafeAreaLayout>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
});
