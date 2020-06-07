import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Clipboard,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import Toast from 'react-native-root-toast';

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
      text: 'FDJD23456762837832DJK87D',
      icon: <Text style={{color: 'blue', fontSize: 12}}>点击可复制</Text>,
      navigateUrl: () => {
        Clipboard.setString('FDJD23456762837832DJK87D');
        Toast.show('复制成功', {
          position: Toast.positions.BOTTOM,
          shadow: false,
        });
      },
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
        {NavList.map((item, index) => (
          <TouchableOpacityView onPress={item.navigateUrl} key={index}>
            <View style={styles.listContainer}>
              <View style={styles.listItem}>
                <View style={{flexDirection: 'row'}}>
                  <Text>{item.title}</Text>
                  {item.text ? (
                    <Text style={{color: '#999', fontSize: 12, marginLeft: 10}}>
                      {item.text}
                    </Text>
                  ) : null}
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
    <TouchableOpacity onPress={() => props.onPress()} activeOpacity={0.8}>
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
