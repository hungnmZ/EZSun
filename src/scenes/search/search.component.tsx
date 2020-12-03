import React, { useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Input, Divider, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { SafeAreaLayout } from '../../components/safe-area-layout.component';
import { ArrowIosBackIcon, SearchIcon, CloseIcon } from '../../components/icons';
import { data } from '../hot/data';
import { MenuGridList } from '../../components/menu-grid-list.component';



export const SearchScreen = ({ navigation }): React.ReactElement => {
    const onItemPress = (index: number): void => {
        navigation.navigate(data[index].route);
    };

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
                style={{ flex: 5, borderRadius: 20 }}
                value={value}
                onChangeText={nextValue => setValue(nextValue)}
                keyboardType='web-search'

            />
            <TopNavigationAction
                icon={SearchIcon}
                style={{ flex: 1, borderRadius: 20 }}
            />
        </View>
    );

    return (
        <SafeAreaLayout
            style={styles.safeArea}
            insets='top'>
            <TopNavigation
                leftControl={BackAction()}
                rightControls={SearchBar()}
            />
            <Divider />
            <MenuGridList
                // em lấy data từ trang hot để hiển thị cho trang này luôn
                data={data.filter(item => item.title.toLowerCase().includes(value.toLowerCase()))}
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
