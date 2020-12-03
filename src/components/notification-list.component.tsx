import React from 'react';
import { ListRenderItemInfo, StyleSheet } from 'react-native';
import { Card, CardElement, List, ListElement, ListProps, Text } from '@ui-kitten/components';
import { NotificationItem } from '../model/notification-item.model';

export interface NotificationListProps extends Omit<ListProps, 'renderItem'> {
    data: NotificationItem[];
    onItemPress: (index: number) => void;
}

export type NotificationListElement = React.ReactElement<NotificationListProps>;

export const NotificationList = (props: NotificationListProps): ListElement => {

    const { contentContainerStyle, onItemPress, ...listProps } = props;

    const renderItem = (info: ListRenderItemInfo<NotificationItem>): CardElement => (
        <Card
            style={styles.itemContainer}
            onPress={() => onItemPress(info.index)}>
            <Text
                category='s1'>
                {info.item.title}
            </Text>
            <Text
                style={styles.itemDescription}
                appearance='hint'>
                {info.item.description}
            </Text>
            <Text
                category='c1'
                style={styles.itemTime}
                appearance='hint'>
                {info.item.time}
            </Text>
        </Card>
    );

    return (
        <List
            {...listProps}
            contentContainerStyle={[styles.container, contentContainerStyle]}
            renderItem={renderItem}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 8,
        paddingVertical: 8,
    },
    itemContainer: {
        marginVertical: 8,
        marginHorizontal: 8,
    },
    itemDescription: {
        marginTop: 4,
        marginBottom: 6
    },
    itemTime: {

    }
});
