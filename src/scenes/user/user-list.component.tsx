import React from 'react';
import { LayoutList } from '../../components/layout-list.component';
import { data } from './data';
import { SafeAreaLayout } from '../../components/safe-area-layout.component';
import TopNavigationDefault from '../../components/top-navigation-default.component';
import { StyleSheet } from 'react-native';

export const UsersListScreen = ({ navigation }): React.ReactElement => {

  const onItemPress = (index: number): void => {
    navigation.navigate(data[index].route);
  };

  return (
    <SafeAreaLayout
      style={styles.container}
      insets='top'>
      <TopNavigationDefault />
      <LayoutList
        data={data}
        onItemPress={onItemPress}
      />
    </SafeAreaLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});