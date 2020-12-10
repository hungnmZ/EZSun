import React from 'react';
import { List, StyleService, useStyleSheet } from '@ui-kitten/components';
import { FlashSaleItem } from '../../model/flashsale-item.model';
import { FlashSaleItemComponent } from '../../components/flashsale-item.component';

import TikiApi from '../../api/tiki.api';
import useAuth from '../../hooks/useAuth';

export const FlashSaleScreen = ({ navigation }): React.ReactElement => {
    const styles = useStyleSheet(themedStyles);

    const [products, setProducts] = React.useState<FlashSaleItem[]>();

    const { auth } = useAuth();

    React.useEffect(() => {
        const fetchData = async () => {
            const data: any = await TikiApi.getFlashSale();

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
        fetchData();
    }, []);

    return (
        <List
            contentContainerStyle={styles.productList}
            data={products}
            numColumns={2}
            renderItem={(info) => (
                <FlashSaleItemComponent info={info} isShowTag={false} />
            )}
        />
    );
};

const themedStyles = StyleService.create({
    container: {
        flex: 1,
        backgroundColor: 'background-basic-color-2',
    },
    productList: {
        paddingHorizontal: 8,
        paddingVertical: 16,
    },
});
