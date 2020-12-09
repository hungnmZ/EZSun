import React from 'react';
import { StyleSheet } from 'react-native';
import { List, StyleService, useStyleSheet } from '@ui-kitten/components';
import { FlashSaleItem } from '../../model/flashsale-item.model';
import { FlashSaleItemComponent } from '../../components/flashsale-item.component';

import { Button, Divider, Text, TopNavigation } from '@ui-kitten/components';
import { SafeAreaLayout } from '../../components/safe-area-layout.component';
import { MenuGridList } from '../../components/menu-grid-list.component';
import { SearchIcon, BellOutlineIcon } from '../../components/icons';
import TopNavigationDefault from '../../components/top-navigation-default.component';

import HotApi from '../../api/hot.api';

export const HotScreen = ({ navigation }): React.ReactElement => {
    const styles = useStyleSheet(themedStyles);

    const [products, setProducts] = React.useState<FlashSaleItem[]>();

    const onLikeItem = (info): void => {
        console.log(info);
    };

    React.useEffect(() => {
        const fetchData = async () => {
            const data: any = await HotApi.getHotProduct();

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
                            item.link,
                        ),
                    ),
                );
            }

            setProducts(temp);
        };
        fetchData();
    }, []);

    return (
        <SafeAreaLayout style={styles.safeArea} insets='top'>
            <TopNavigationDefault navigation={navigation} />
            <Divider />
            <List
                contentContainerStyle={styles.productList}
                data={products}
                numColumns={2}
                renderItem={(info) => (
                    <FlashSaleItemComponent
                        info={info}
                        onLikeItem={onLikeItem}
                        isShowTag={true}
                    />
                )}
            />
        </SafeAreaLayout>
    );
};

const themedStyles = StyleService.create({
    safeArea: {
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: 'background-basic-color-2',
    },
    productList: {
        paddingHorizontal: 8,
        paddingVertical: 16,
    },
});
