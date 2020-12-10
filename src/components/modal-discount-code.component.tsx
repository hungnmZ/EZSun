import React from 'react';
import { StyleSheet, Linking } from 'react-native';
import { Modal, Text, Layout, Button, ModalProps } from '@ui-kitten/components';
import { DiscountItem } from '../model/discount-item.model';

interface ModalDiscountCodeProps extends Omit<ModalProps, 'children'> {
    onCopyButtonPress: () => void;
    currDiscountItem: DiscountItem;
}

export const ModalDiscountCode = (
    props: ModalDiscountCodeProps,
): React.ReactElement => {
    const { onCopyButtonPress, currDiscountItem, ...modalProps } = props;

    const onGotoLinkCode = () => {
        Linking.openURL(currDiscountItem.url);
    };

    return (
        <Modal backdropStyle={styles.backdrop} {...modalProps}>
            <Layout style={styles.container}>
                <Text category='h5'>{currDiscountItem.name}</Text>
                <Text
                    style={styles.description}
                    appearance='hint'
                    category='s1'
                >
                    {currDiscountItem.code}
                </Text>
                <Layout style={{ flexDirection: 'row', margin: -8 }}>
                    <Button style={styles.button} onPress={onCopyButtonPress}>
                        Sao chép
                    </Button>
                    <Button style={styles.button} onPress={onGotoLinkCode}>
                        Link mã
                    </Button>
                </Layout>
            </Layout>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 4,
        padding: 16,
        width: 300,
        textAlign: 'center',
    },
    description: {
        marginTop: 8,
        marginBottom: 24,
    },
    backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    button: {
        flex: 1,
        margin: 8,
        backgroundColor: '#FF6720',
        borderWidth: 0,
    },
});
