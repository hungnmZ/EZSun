import React from 'react';
import {
    ListRenderItemInfo,
    View,
    ImageBackground,
    Dimensions,
    Linking,
} from 'react-native';
import {
    Card,
    Text,
    Button,
    useStyleSheet,
    StyleService,
    Layout,
} from '@ui-kitten/components';
import { HeartIcon } from './icons';
import { FlashSaleItem } from '../model/flashsale-item.model';

export const FlashSaleItemComponent = ({
    info,
    onLikeItem,
    isShowTag,
}): React.ReactElement => {
    const styles = useStyleSheet(themedStyles);

    const openFlashSale = (link: string) => {
        Linking.openURL(link);
    };

    const ItemHeader = (
        info: ListRenderItemInfo<FlashSaleItem>,
    ): React.ReactElement => (
        <Layout>
            {isShowTag ? (
                <Button
                    style={{ backgroundColor: '#FF6721', borderWidth: 0 }}
                    size='small'
                    status='primary'
                >
                    {info.item.getLabelTag}
                </Button>
            ) : null}
            <ImageBackground
                style={styles.itemHeader}
                source={info.item.image}
            />
        </Layout>
    );

    const ItemFooter = (
        info: ListRenderItemInfo<FlashSaleItem>,
    ): React.ReactElement => (
        <View style={styles.itemFooter}>
            <Layout>
                <Text
                    appearance='hint'
                    category='c1'
                    style={styles.originPrice}
                >
                    {info.item.formattedOriginPrice}
                </Text>
                <Text category='s1'>{info.item.formattedSalePrice}</Text>
            </Layout>

            <Button
                style={styles.iconButton}
                size='small'
                status='danger'
                onPress={() => onLikeItem(info)}
                icon={HeartIcon}
            />
        </View>
    );

    return (
        <Card
            style={styles.productItem}
            header={() => ItemHeader(info)}
            footer={() => ItemFooter(info)}
            onPress={() => openFlashSale(info.item.linkHandle)}
        >
            <Text category='s1' numberOfLines={2}>
                {info.item.title}
            </Text>
        </Card>
    );
};

const themedStyles = StyleService.create({
    productItem: {
        flex: 1,
        margin: 8,
        maxWidth: Dimensions.get('window').width / 2 - 24,
        backgroundColor: 'background-basic-color-1',
    },
    itemHeader: {
        height: 140,
    },
    itemFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    iconButton: {
        paddingHorizontal: 0,
    },
    originPrice: {
        textDecorationLine: 'line-through',
    },
});
