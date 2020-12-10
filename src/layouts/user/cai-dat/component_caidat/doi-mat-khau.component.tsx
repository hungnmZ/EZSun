import React from 'react';
import { Button, Divider, Icon, Input, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { SafeAreaLayout } from '../../../../../src/components/safe-area-layout.component';
import { ArrowIosBackIcon } from '../../../../../src/components/icons';
import { firebase } from '../../../../firebase/config';
import { StyleSheet } from 'react-native';

export const DoiMatKhauScreen = ({ navigation }): React.ReactElement => {
    const [oldPass, setOldPass] = React.useState('');
    const [newPass, setNewPass] = React.useState('');
    const [reNewPass, setReNewPass] = React.useState('');
    const [secureTextEntry, setSecureTextEntry] = React.useState(true);

    const onIconPress = () => {
        setSecureTextEntry(!secureTextEntry);
    };

    const renderIcon = (style) => (
        <Icon {...style} name={secureTextEntry ? 'eye-off' : 'eye'}/>
    );

    const renderBackAction = (): React.ReactElement => (
        <TopNavigationAction
            icon={ArrowIosBackIcon}
            onPress={navigation.goBack}
        />
    );

    const changePass = (oldPass:string, newPass:string, reNewPass:string) : void => {
        if(newPass !== reNewPass){
            alert("Mật khẩu mới không trùng khớp");
            return;
        }
        var user = firebase.auth().currentUser;
        var credential = firebase.auth.EmailAuthProvider.credential(
            firebase.auth().currentUser.email,
            oldPass
        );

        // Prompt the user to re-provide their sign-in credentials

        user.reauthenticateWithCredential(credential).then(function() {
            // User re-authenticated.
            var user = firebase.auth().currentUser;
            user.updatePassword(newPass).then(function() {
                console.log(navigation);
                console.log(firebase.auth().currentUser);
                // Update successful.
                alert('Đổi mật khẩu thành công');
                setOldPass('');
                setNewPass('');
                setReNewPass('');
            }).catch(function(error) {
                // An error happened.
                console.log("err: "+error);
                alert('Có lỗi xảy ra vui lòng thử lại');
            });
        }).catch(function(error) {
            alert("Mật khẩu cũ không đúng");
        });
    };
  
    return (
        <SafeAreaLayout style={styles.safeArea} insets='top'>
            <TopNavigation title='Đổi mật khẩu' leftControl={renderBackAction()} />
            <Divider />
            <Input
                value={oldPass}
                style={{margin:15,backgroundColor:'#fff'}}
                placeholder='Mật khẩu cũ'
                icon={renderIcon}
                secureTextEntry={secureTextEntry}
                onIconPress={onIconPress}
                onChangeText={setOldPass}
            />
            <Input
                value={newPass}
                style={{marginLeft:15,marginRight:15,backgroundColor:'#fff'}}
                placeholder='Mật khẩu mới'
                icon={renderIcon}
                secureTextEntry={secureTextEntry}
                onIconPress={onIconPress}
                onChangeText={setNewPass}
            />
            <Input
                value={reNewPass}
                style={{margin:15,backgroundColor:'#fff'}}
                placeholder='Nhập lại mật khẩu mới'
                icon={renderIcon}
                secureTextEntry={secureTextEntry}
                onIconPress={onIconPress}
                onChangeText={setReNewPass}
            />

            <Button 
                style={{borderRadius: 4, margin: 15,backgroundColor: '#3366FF'}} 
                appearance='ghost' 
                onPress={()=>{changePass(oldPass,newPass,reNewPass),navigation.goBack}}
                status='control'>
                    Cập nhật mật khẩu
            </Button>
            <Button
                style={{borderRadius: 4, marginLeft: 15, marginRight:15, backgroundColor: '#e2dede'}}
                onPress={navigation.goBack}
                status='basic'>
                    Hủy
            </Button>
        </SafeAreaLayout>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    container: {
        padding: 8,
    },
    item: {
        margin: 8,
    },
    evaToggle: {
        margin: 8,
        alignSelf: 'flex-end',
        flexDirection: 'row-reverse',
    },
});