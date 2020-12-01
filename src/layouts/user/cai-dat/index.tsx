import React from 'react';
import { ImageBackground, ListRenderItemInfo, StyleSheet, View } from 'react-native';
import { Avatar, Button, Card, Layout, List, Text, Toggle } from '@ui-kitten/components';
import { Article } from './extra/data';
import { firebase } from '../../../firebase/config';

const data: Article[] = [
  Article.howToEatHealthy(),
];

export default ({ navigation }): React.ReactElement => {
  // const mappingContext: MappingContextValue = React.useContext(Theming.MappingContext);
  // const themeContext: ThemeContextValue = React.useContext(Theming.ThemeContext);

  // const themes: ThemeItem[] = ThemesService.createThemeListItems(
  //   appThemes,
  //   mappingContext.currentMapping,
  // );

  // const onItemPress = (info: ListRenderItemInfo<ThemeItem>): void => {
  //   themeContext.setCurrentTheme(info.item.name);
  // };

  // const isActiveTheme = (theme: ThemeItem): boolean => {
  //   return mappingContext.currentMapping === theme.mapping && themeContext.currentTheme === theme.name;
  // };

  // const shouldDisableItem = (theme: ThemeItem): boolean => {
  //   return themeContext.currentTheme === theme.name;
  // };

  // const createThemeNameForItem = (theme: ThemeItem): string => {
  //   return `${theme.mapping} ${theme.name}`.toUpperCase();
  // };

  const [checked, setChecked] = React.useState(false);

  const onCheckedChange = () => {
    setChecked(!checked);
  };
  
  const renderItem = (): React.ReactElement => (
    <View>
      <Card
        style={styles.item}
        onPress={() => onCheckedChange}>
        <Text>Đổi mật khẩu</Text>
      </Card>
      <Card
        style={{marginVertical: 8}}
        onPress={onCheckedChange}>
        <Text>Dark theme</Text>
        <Toggle checked={checked} onChange={onCheckedChange}></Toggle>
      </Card>
      <Card
        style={{marginVertical: 8}}
        onPress={() => firebase.auth().signOut()}>
        <Text>Đăng xuất</Text>
      </Card>
    </View>
  );

  return (
    <Layout
      style={styles.container}
      level='2'>
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
    marginVertical: 8,
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

