import React from 'react';
import {StyleSheet } from 'react-native';
import { Article } from './extra/data';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ProductScreen } from './component_luutru/Product.component';
import { VoucherScreen } from './component_luutru/voucher.component';

const data: Article[] = [
  Article.howToEatHealthy(),
];

const Stack = createStackNavigator();
const TopTab = createMaterialTopTabNavigator();

const LuutruMenuNavigator = (): React.ReactElement => (
  <TopTab.Navigator>
      <TopTab.Screen name='product' component={ProductScreen} />
      <TopTab.Screen name='voucher' component={VoucherScreen} />
  </TopTab.Navigator>
);

export default ({ navigation }): React.ReactElement => (
  <Stack.Navigator headerMode='none'>
      <Stack.Screen name='LuuTru' component={LuutruMenuNavigator} />
  </Stack.Navigator>
);

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   list: {
//     flex: 1,
//   },
//   listContent: {
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//   },
//   item: {
//     marginVertical: 8,
//   },
//   itemHeader: {
//     height: 220,
//   },
//   itemContent: {
//     marginVertical: 8,
//   },
//   itemFooter: {
//     flexDirection: 'row',
//     marginHorizontal: -8,
//   },
//   iconButton: {
//     paddingHorizontal: 0,
//   },
//   itemAuthoringContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     marginHorizontal: 16,
//   },
// });

