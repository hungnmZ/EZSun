import React, { useCallback, useReducer } from 'react';
import { StyleSheet } from 'react-native';
import {
    Button,
    TopNavigation,
    TopNavigationAction,
} from '@ui-kitten/components';
import { SafeAreaLayout } from '../../components/safe-area-layout.component';
import { ArrowIosBackIcon } from '../../components/icons';
import ContentView from '../../layouts/user/tai-khoan';
import { firebase } from '../../firebase/config';

export const TaiKhoanScreen = ({ navigation }): React.ReactElement => {
    const [user, setUser] = React.useState(firebase.auth().currentUser);
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
        setUser(user);
        console.log(user);
        user.updateProfile({
            displayName: user.displayName
        }).then(function() {
            // Update successful.
            console.log("sucess");
        }).catch(function(error) {
            // An error happened.
            console.log("err");
        });
    };

    const renderOverflowMenuAction = () =>
        !isEdit && isSave ? (
            <React.Fragment>
                <Button
                    onPress={clickEdit}
                    style={{ margin: 2, paddingLeft: 18, paddingRight: 18, backgroundColor: '#ff6720', borderColor: '#ff6720' }}
                    size='small'
                >
                    Edit
                </Button>
            </React.Fragment>
        ) : (
            <React.Fragment>
                <Button
                    onPress={clickSave}
                    style={{ margin: 2, paddingLeft: 15, paddingRight: 15, backgroundColor: '#ff6720', borderColor: '#ff6720' }}
                    size='small'
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
