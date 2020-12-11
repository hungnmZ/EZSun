import React, { useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import {
    Input,
    Divider,
    TopNavigation,
    TopNavigationAction,
    List,
} from '@ui-kitten/components';
import { SafeAreaLayout } from '../../components/safe-area-layout.component';
import {
    ArrowIosBackIcon,
    SearchIcon,
    CloseIcon,
} from '../../components/icons';
import { MenuGridList } from '../../components/menu-grid-list.component';
import { FlashSaleItem } from '../../model/flashsale-item.model';
import { FlashSaleItemComponent } from '../../components/flashsale-item.component';

import SearchApi from '../../api/search.api';
import useAuth from '../../hooks/useAuth';

export const SearchScreen = ({ navigation }): React.ReactElement => {
    const [products, setProducts] = useState([]);
    const [pageIndex, setPageIndex] = React.useState(1);
    const [value, setValue] = useState('');

    const { auth } = useAuth();

    const onSubmitSearch = async () => {
        const data = await SearchApi.getSearchProduct(value, pageIndex);
        let temp: FlashSaleItem[] = [];

        if (data.data.data.results) {
            data.data.data.results.forEach((item: any) =>
                temp.push(
                    new FlashSaleItem(
                        item._id,
                        item.sale_title,
                        item.image,
                        item.sale_price,
                        item.origin_price,
                        item.link,
                        auth.id,
                    ),
                ),
            );
        }

        setProducts(temp);
    };

    React.useEffect(() => {
        const fetchData = async () => {
            const data = await SearchApi.getSearchProduct(value, pageIndex);
            let temp: FlashSaleItem[] = [];

            if (data.data.data.results) {
                data.data.data.results.forEach((item: any) =>
                    temp.push(
                        new FlashSaleItem(
                            item._id,
                            item.sale_title,
                            item.image,
                            item.sale_price,
                            item.origin_price,
                            item.link,
                            auth.id,
                        ),
                    ),
                );
            }

            setProducts(products?.concat(temp));
        };
        fetchData();
    }, [pageIndex]);

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
                autoCorrect={false}
            />
            <TopNavigationAction
                icon={SearchIcon}
                style={{ flex: 1, borderRadius: 20, left: 3 }}
                onPress={onSubmitSearch}
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
                onEndReached={() => setPageIndex(pageIndex + 1)}
                onEndReachedThreshold={0.5}
                contentContainerStyle={styles.productList}
                data={products}
                numColumns={2}
                renderItem={(info) => (
                    <FlashSaleItemComponent info={info} isShowTag={true} />
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
