import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HotScreen } from '../scenes/hot/hot.component';
import { NotificationScreen } from '../scenes/notification/notification.component';
import { SearchScreen } from '../scenes/search/search.component';


const Stack = createStackNavigator();

export const HotNavigator = ({ navigation, route }): React.ReactElement => {
  if (route.state && route.state.routeNames[route.state.index] === "Notification") {
    navigation.setOptions({ tabBarVisible: false })
  } else {
    navigation.setOptions({ tabBarVisible: true })
  }
  return (
    <Stack.Navigator headerMode='none' initialRouteName="Hot">
      <Stack.Screen name='Hot' component={HotScreen} />
      <Stack.Screen name='Notification' component={NotificationScreen} />
      <Stack.Screen name='Search' component={SearchScreen} />

    </Stack.Navigator>
  )
}
