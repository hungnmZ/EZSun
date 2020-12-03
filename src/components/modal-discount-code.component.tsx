import React from 'react';
import { StyleSheet } from 'react-native';
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

    return (
        <Modal backdropStyle={styles.backdrop} {...modalProps}>
            <Layout style={styles.container}>
                <Text category='h5'>Mã giảm giá</Text>
                <Text
                    style={styles.description}
                    appearance='hint'
                    category='s1'
                >
                    {currDiscountItem.code}
                </Text>
                <Button onPress={onCopyButtonPress}>COPY</Button>
            </Layout>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 4,
        padding: 16,
        width: 250,
        textAlign: 'center',
    },
    description: {
        marginTop: 8,
        marginBottom: 24,
    },
    backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
});
