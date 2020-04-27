import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';

export const MeHome = ({navigation}) => {
  const NavList = [
    {
      title: '虚拟卡位置',
      textRight: '暂无',
      icon: null,
      navigateUrl: '',
    },
    {
      title: '设备编号',
      textRight: null,
      icon: <Icon name="right" size={14} color="#cccccc" />,
      navigateUrl: '',
    },
    {
      title: '常见问题',
      textRight: null,
      icon: <Icon name="right" size={14} color="#cccccc" />,
      navigateUrl: () => navigation.navigate('MeHelp'),
    },
    {
      title: '用户条款',
      textRight: null,
      icon: <Icon name="right" size={14} color="#cccccc" />,
      navigateUrl: () => navigation.navigate('UserTerms'),
    },
    {
      title: '关于流量商店',
      textRight: null,
      icon: <Icon name="right" size={14} color="#cccccc" />,
      navigateUrl: () => navigation.navigate('AboutShop'),
    },
    {
      title: '检测新版本',
      textRight: 'v4.4.1',
      icon: null,
      navigateUrl: null,
    },
  ];
  return (
    <SafeAreaView style={styles.pageStyle}>
      <ScrollView>
        {NavList.map(item => (
          <TouchableOpacityView onPress={item.navigateUrl}>
            <View style={styles.listContainer}>
              <View style={styles.listItem}>
                <View>
                  <Text>{item.title}</Text>
                </View>
                <View>
                  {item.textRight && (
                    <Text style={styles.textRight}>{item.textRight}</Text>
                  )}
                  {item.icon}
                </View>
              </View>
            </View>
          </TouchableOpacityView>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

function TouchableOpacityView(props) {
  if (!props.onPress) {
    return props.children;
  }
  return (
    <TouchableOpacity onPress={() => props.onPress()}>
      {props.children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  pageStyle: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },
  listContainer: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  listItem: {
    paddingTop: 20,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderBottomColor: '#999999',
  },
  textRight: {
    color: '#999999',
  },
});
