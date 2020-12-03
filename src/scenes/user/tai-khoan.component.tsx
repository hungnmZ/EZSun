import React, { useCallback, useReducer } from 'react';
import { StyleSheet } from 'react-native';
import {
    Button,
    Text,
    TopNavigation,
    TopNavigationAction,
} from '@ui-kitten/components';
import { SafeAreaLayout } from '../../components/safe-area-layout.component';
import { ArrowIosBackIcon } from '../../components/icons';
import ContentView from '../../layouts/user/tai-khoan';

export const TaiKhoanScreen = ({ navigation }): React.ReactElement => {
    const [isEdit, setEditBol] = React.useState(false);
    const [isSave, setSaveBol] = React.useState(true);

    const renderBackAction = (): React.ReactElement => (
        <TopNavigationAction
            icon={ArrowIosBackIcon}
            onPress={navigation.goBack}
        />
    );

    const clickEdit = (): void => {
        setEditBol(true);
        setSaveBol(false);
        renderOverflowMenuAction();
    };

    const clickSave = (): void => {
        setEditBol(false);
        setSaveBol(true);
        renderOverflowMenuAction();
    };

    const renderOverflowMenuAction = () =>
        !isEdit && isSave ? (
            <React.Fragment>
                <Button
                    onPress={clickEdit}
                    style={{ margin: 2, paddingLeft: 18, paddingRight: 18 }}
                    size='small'
                    status='primary'
                >
                    Edit
                </Button>
            </React.Fragment>
        ) : (
            <React.Fragment>
                <Button
                    onPress={clickSave}
                    style={{ margin: 2, paddingLeft: 15, paddingRight: 15 }}
                    size='small'
                    status='primary'
                >
                    Save
                </Button>
            </React.Fragment>
        );

    return (
        <SafeAreaLayout style={styles.container} insets='top'>
            <TopNavigation
                title='Tài khoản'
                leftControl={renderBackAction()}
                rightControls={renderOverflowMenuAction()}
            />
            <ContentView
                isEdit={isEdit}
                isSave={isSave}
                navigation={navigation}
            />
        </SafeAreaLayout>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
