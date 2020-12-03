import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ProductScreen } from './component_luutru/product.component';
import { VoucherScreen } from './component_luutru/voucher.component';
import { TabBar, Tab } from '@ui-kitten/components';
import { FlashOutLineIcon, PricetagsOutLineIcon } from '../../../components/icons';

const TopTab = createMaterialTopTabNavigator();

const LuuTruTabBar = ({ navigation, state }): React.ReactElement => {

  const onTabSelect = (index: number): void => {
    navigation.navigate(state.routeNames[index]);
  };

  return (
    <TabBar
      selectedIndex={state.index}
      onSelect={onTabSelect}>
      <Tab icon={FlashOutLineIcon} />
      <Tab icon={PricetagsOutLineIcon} />
    </TabBar>
  );
};

export default (): React.ReactElement => (
  <TopTab.Navigator tabBar={props => <LuuTruTabBar {...props} />}>
    <TopTab.Screen name='Product' component={ProductScreen} />
    <TopTab.Screen name='Voucher' component={VoucherScreen} />
  </TopTab.Navigator>
);
