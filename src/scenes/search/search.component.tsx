import React, { useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Input, Divider, TopNavigation, TopNavigationAction, List } from '@ui-kitten/components';
import { SafeAreaLayout } from '../../components/safe-area-layout.component';
import { ArrowIosBackIcon, SearchIcon, CloseIcon } from '../../components/icons';
import { MenuGridList } from '../../components/menu-grid-list.component';
import { FlashSaleItem } from '../../model/flashsale-item.model';
import { FlashSaleItemComponent } from '../../components/flashsale-item.component';

import SearchApi from '../../api/search.api'

export const SearchScreen = ({ navigation }): React.ReactElement => {
    const [products, setProducts] = useState([]);
    const [value, setValue] = useState('');
    const onItemPress = (index: number): void => {

    };

    const onSubmitSearch = async () => {
        const data = await SearchApi.getSearchProduct(value);
        let temp: FlashSaleItem[] = [];

        if (data.data.data.results) {
            data.data.data.results.forEach((item: any) =>
                temp.push(
                    new FlashSaleItem(
                        item._id,
                        item.sale_title,
                        { uri: item.image },
                        item.sale_price,
                        item.origin_price,
                        item.link
                    )
                )
            );
        }

        setProducts(temp);
    }


    const BackAction = (): React.ReactElement => (
        <TopNavigationAction
            icon={ArrowIosBackIcon}
            onPress={() => navigation.goBack()}

        />
    );

    const ClearAction = (): React.ReactElement => (
        <TopNavigationAction
            icon={CloseIcon}
            onPress={() => {
                setValue('');
            }}
            style={{ opacity: 0.8 }}
        />

    );



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
                onSubmitEditing={onSubmitSearch}

                icon={ClearAction}
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
            <List
                contentContainerStyle={styles.productList}
                data={products}
                numColumns={2}
                renderItem={(info) => (
                    <FlashSaleItemComponent info={info} onLikeItem isShowTag={true} />
                )}
            />
        </SafeAreaLayout>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    productList: {
        paddingHorizontal: 8,
        paddingVertical: 16,
    },
});
