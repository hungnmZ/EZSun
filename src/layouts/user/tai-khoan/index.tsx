import React from 'react';
import { ListRenderItemInfo, StyleSheet, View } from 'react-native';
import { Input, Layout, List, Text, Datepicker } from '@ui-kitten/components';
import { Article } from './extra/data';
import { RadioButton } from 'react-native-paper';

const data: Article[] = [Article.howToEatHealthy()];

export default ({ isEdit, isSave, navigation, user }): React.ReactElement => {
    const [ngaysinh, setNgaySinh] = React.useState(new Date());
    const [ten, setTen] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [sdt, setSdt] = React.useState('');
    const [gioiTinh, setGioiTinh] = React.useState('');

    const renderItem = (
        info: ListRenderItemInfo<Article>,
    ): React.ReactElement =>
        isEdit && !isSave ? (
            <View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Text style={{ flex: 1, marginTop: 10, color: 'gray' }}>
                        Họ và tên
                    </Text>
                    <Input
                        style={{ flex: 2 }}
                        placeholder=''
                        value={user.username}
                        onChangeText={(nextValue) => {setTen(nextValue);user.username=nextValue}}
                    />
                </View>

                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Text style={{ flex: 1, marginTop: 10, color: 'gray' }}>
                        Ngày sinh
                    </Text>
                    <Datepicker
                        min={new Date(1900, 1, 1)}
                        style={{ flex: 2 }}
                        date={ngaysinh}
                        onSelect={(nextDate) => {setNgaySinh(nextDate);user.birthday = nextDate}}
                    />
                </View>

                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Text style={{ flex: 1, marginTop: 10, color: 'gray' }}>
                        Giới tính
                    </Text>
                    <RadioButton
                        color='#ff7620'
                        value='Nữ'
                        status={user.gender === 'nu' ? 'checked' : 'unchecked'}
                        onPress={() => {setGioiTinh('nu');user.gender='nu'}}
                    />
                    <Text style={{ marginTop: 8, marginRight: 10 }}>Nữ</Text>
                    <RadioButton
                        color='#ff7620'
                        value='Nam'
                        status={user.gender === 'nam' ? 'checked' : 'unchecked'}
                        onPress={() => {setGioiTinh('nam');user.gender='nam'}}
                    />
                    <Text style={{ marginTop: 8 }}>Nam</Text>
                </View>

                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Text style={{ flex: 1, marginTop: 10, color: 'gray' }}>
                        Số điện thoại
                    </Text>
                    <Input
                        style={{ flex: 2 }}
                        placeholder=''
                        value={user.phoneNumber}
                        onChangeText={(nextValue) => {setSdt(nextValue);user.phoneNumber=nextValue}}
                    />
                </View>
            </View>
        ) : (
            <View>
                <View
                    style={{
                        flex: 1,
                        marginTop: 20,
                        flexDirection: 'row',
                        height: 30,
                        borderBottomColor: '#ecf0f1',
                        borderBottomWidth: 1,
                    }}
                >
                    <Text style={{ flex: 1, color: 'gray' }}>Tên</Text>
                    <Text style={{ flex: 2, textAlign: 'right' }}>{user.username}</Text>
                </View>

                <View
                    style={{
                        flex: 1,
                        marginTop: 20,
                        flexDirection: 'row',
                        height: 30,
                        borderBottomColor: '#ecf0f1',
                        borderBottomWidth: 1,
                    }}
                >
                    <Text style={{ flex: 1, color: 'gray' }}>Ngày sinh</Text>
                    <Text
                        style={{ flex: 2, textAlign: 'right' }}
                    >{`${ngaysinh.getDate()}/${
                        ngaysinh.getMonth() + 1
                    }/${ngaysinh.getFullYear()}`}</Text>
                </View>

                <View
                    style={{
                        flex: 1,
                        marginTop: 20,
                        flexDirection: 'row',
                        height: 30,
                        borderBottomColor: '#ecf0f1',
                        borderBottomWidth: 1,
                    }}
                >
                    <Text style={{ flex: 1, color: 'gray' }}>Giới tính</Text>
                    <Text style={{ flex: 2, textAlign: 'right' }}>
                        {user.gender == 'nu' ? 'Nữ' : 'Nam'}
                    </Text>
                </View>

                <View
                    style={{
                        flex: 1,
                        marginTop: 20,
                        flexDirection: 'row',
                        height: 30,
                        borderBottomColor: '#ecf0f1',
                        borderBottomWidth: 1,
                    }}
                >
                    <Text style={{ flex: 1, color: 'gray' }}>
                        Số điện thoại
                    </Text>
                    <Text style={{ flex: 2, textAlign: 'right' }}>{user.phoneNumber}</Text>
                </View>

                <View
                    style={{
                        flex: 1,
                        marginTop: 20,
                        flexDirection: 'row',
                        height: 30,
                        borderBottomColor: '#ecf0f1',
                        borderBottomWidth: 1,
                    }}
                >
                    <Text style={{ flex: 1, color: 'gray' }}>Email</Text>
                    <Text style={{ flex: 2, textAlign: 'right' }}>{user.email}</Text>
                </View>
            </View>
        );

    return (
        <Layout style={styles.container} level='2'>
            <List
                style={styles.list}
                contentContainerStyle={styles.listContent}
                data={data}
                renderItem={renderItem}
            />
        </Layout>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    list: {
        flex: 1,
    },
    listContent: {
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    item: {
        marginVertical: 5,
    },
    itemHeader: {
        height: 220,
    },
    itemContent: {
        marginVertical: 8,
    },
    itemFooter: {
        flexDirection: 'row',
        marginHorizontal: -8,
    },
    iconButton: {
        paddingHorizontal: 0,
    },
    itemAuthoringContainer: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
    },
});
