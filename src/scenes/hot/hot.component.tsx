import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Divider, Text, TopNavigation } from '@ui-kitten/components';
import { SafeAreaLayout } from '../../components/safe-area-layout.component';
import { MenuGridList } from '../../components/menu-grid-list.component';
import { data } from './data';
import useAuth from '../../hooks/useAuth';
import {firebase} from '../../firebase/config';

export const HotScreen = ({ navigation }): React.ReactElement => {
  const {auth} = useAuth();

  const onItemPress = (index: number): void => {
    navigation.navigate(data[index].route);
  };

  return (
    <SafeAreaLayout
      style={styles.safeArea}
      insets='top'>
      <TopNavigation
        title='EZSun'
      />
      <Divider/>
      <Text>
        {JSON.stringify(auth)}
      </Text>
      <Button onPress={() => firebase.auth().signOut()}>
        Sign out
      </Button>
      <MenuGridList
        data={data}
        onItemPress={onItemPress}
      />
    </SafeAreaLayout>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 16,
  },
});
