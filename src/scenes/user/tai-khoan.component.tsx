import React, { useCallback, useReducer, useEffect } from 'react';
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
    const db = firebase.firestore();
    console.log(db);
    var userId = firebase.auth().currentUser.uid;
    const userRef = db.doc('/users/' + userId);
        
    const [user, setUser] = React.useState(firebase.auth().currentUser);
    // const [userCreate, setUserCreate] = React.useState({
    //     email:user.email,
    //     username: '',
    //     birthday:'',
    //     gender:'',
    //     phoneNumber:''

    // });
    
    
    
    // const [userCustom, setUserCustom] = React.useState<any>( {
    //     email:user.email,
    //     username: '',
    //     birthday:'',
    //     gender:'nu',
    //     phoneNumber:''

    // });

    const [userCustom, setUserCustom] = React.useState<any>( {
        

    });


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
    
        userRef.set({
            username: userCustom.username,
            email: userCustom.email,
            phoneNumber: userCustom.phoneNumber,
            birthday: userCustom.birthday,
            gender: userCustom.gender
        })
        console.log(userCustom);

        userRef.get().then(function(doc) {
            if (doc.exists) {
                console.log("Document data:", doc.data());
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
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

        
    React.useEffect(() => {
        
        const fetchData = async () => {
            
            let doc = await userRef.get();
            let userCreate: any= {};
            userCreate.email = doc.data().email;
            userCreate.username = doc.data().username;
            userCreate.birthday = doc.data().birthday;
            userCreate.gender = doc.data().gender;
            userCreate.phoneNumber = doc.data().phoneNumber;
            console.log(userCreate);
            setUserCustom(userCreate);
            
        };

        fetchData();
    }, []);
    
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
                user={userCustom}
            />
        </SafeAreaLayout>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
