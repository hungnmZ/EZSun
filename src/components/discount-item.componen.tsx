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
import { DiscountItem } from '../model/discount-item.model';

export const DiscountItemComponent = ({
    info,
    backgroundColorImg,
    onLikeItem,
    onPressDiscountItem,
}): React.ReactElement => {
    const styles = useStyleSheet(themedStyles);

    const ItemFooter = (
        info: ListRenderItemInfo<DiscountItem>,
    ): React.ReactElement => (
        <View style={styles.itemFooter}>
            <Layout>
                <Text appearance='hint' category='c1'>
                    {info.item.getStartDate}
                </Text>
                <Text category='s2'>{info.item.getEndDate}</Text>
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

    const ItemHeader = (
        info: ListRenderItemInfo<DiscountItem>,
    ): React.ReactElement => (
        <ImageBackground
            style={{
                backgroundColor: backgroundColorImg,
                height: 160,
            }}
            source={info.item.image}
        />
    );

    return (
        <Card
            style={styles.productItem}
            header={() => ItemHeader(info)}
            footer={() => ItemFooter(info)}
            onPress={() => onPressDiscountItem(info)}
        >
            <Text category='s1' numberOfLines={2}>
                {info.item.name}
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
    itemFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    iconButton: {
        paddingHorizontal: 0,
    },
});
