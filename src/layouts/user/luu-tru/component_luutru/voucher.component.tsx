import React from 'react';
import { Clipboard } from 'react-native';
import { useStyleSheet, List, StyleService } from '@ui-kitten/components';
import { DiscountItem } from '../../../../model/discount-item.model';
import { DiscountItemComponent } from '../../../../components/discount-item.componen';
import { ModalDiscountCode } from '../../../../components/modal-discount-code.component';

import StorageApi from '../../../../api/storage.api';
import useAuth from '../../../../hooks/useAuth';

export const VoucherScreen = ({ navigation }): React.ReactElement => {
    const styles = useStyleSheet(themedStyles);

    const [products, setProducts] = React.useState<DiscountItem[]>();

    const [showModalCopy, setShowModalCopy] = React.useState<boolean>(false);

    const [
        currDiscountItem,
        setCurrDiscountItem,
    ] = React.useState<DiscountItem>(Object);

    const onPressDiscountItem = (info) => {
        setShowModalCopy(true);
        setCurrDiscountItem(info.item);
    };

    const onCopyButtonPress = (): void => {
        setShowModalCopy(false);
        Clipboard.setString(currDiscountItem.code);
    };

    const { auth } = useAuth();

    React.useEffect(() => {
        const fetchData = async () => {
            const data: any = await StorageApi.getSaveItem('discount-items');

            let temp: DiscountItem[] = [];

            if (data) {
                data.forEach((doc) => {
                    const item = doc.data();

                    temp.push(
                        new DiscountItem(
                            item._id,
                            item.image,
                            item.name,
                            item.start,
                            item.end,
                            item.code,
                            item.url,
                            auth.id,
                        ),
                    );
                });
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
                renderItem={(info) => {
                    const bgColor = () => {
                        switch (info?.item?.image) {
                            case 'shopee':
                                return '#EE4D2D';
                            case 'tiki':
                                return '#1AA9FE';
                            case 'lazada':
                                return '#0F1372';
                        }
                        return;
                    };

                    return (
                        <DiscountItemComponent
                            info={info}
                            backgroundColorImg={bgColor()}
                            onPressDiscountItem={onPressDiscountItem}
                        />
                    );
                }}
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
