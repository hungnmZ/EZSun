import React from 'react';
import { Clipboard } from 'react-native';
import { useStyleSheet, List, StyleService } from '@ui-kitten/components';
import { DiscountItem } from '../../model/discount-item.model';
import { DiscountItemComponent } from '../../components/discount-item.componen';
import { ModalDiscountCode } from '../../components/modal-discount-code.component';

import shopeeApi from '../../api/shopee.api';

export const DiscountScreen = ({ navigation }): React.ReactElement => {
    const styles = useStyleSheet(themedStyles);

    const [products, setProducts] = React.useState<DiscountItem[]>();

    const [showModalCopy, setShowModalCopy] = React.useState<boolean>(false);

    const [
        currDiscountItem,
        setCurrDiscountItem,
    ] = React.useState<DiscountItem>(Object);

    const onLikeItem = (info): void => {
        console.log(info);
    };

    const onPressDiscountItem = (info) => {
        setShowModalCopy(true);
        setCurrDiscountItem(info.item);
    };

    const onCopyButtonPress = (): void => {
        setShowModalCopy(false);
        Clipboard.setString(currDiscountItem.code);
    };

    React.useEffect(() => {
        const fetchData = async () => {
            const data: any = await shopeeApi.getDiscount();

            let temp: DiscountItem[] = [];

            if (data.data.pageProps.promotion) {
                data.data.pageProps.promotion.forEach((item: any) =>
                    temp.push(
                        new DiscountItem(
                            item._id,
                            require('../../assets/images/shopee-discount.png'),
                            item.name,
                            item.start,
                            item.end,
                            item.code
                        )
                    )
                );
            }

            setProducts(temp);
        };
        fetchData();
    }, []);

    return (
        <React.Fragment>
            <List
                contentContainerStyle={styles.productList}
                data={products}
                numColumns={2}
                renderItem={(info) => (
                    <DiscountItemComponent
                        info={info}
                        onLikeItem={onLikeItem}
                        onPressDiscountItem={onPressDiscountItem}
                    />
                )}
            />
            <ModalDiscountCode
                onBackdropPress={() => setShowModalCopy(!showModalCopy)}
                onCopyButtonPress={onCopyButtonPress}
                currDiscountItem={currDiscountItem}
                visible={showModalCopy}
            />
        </React.Fragment>
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
