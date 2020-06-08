import React, {useLayoutEffect} from 'react';
import {View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {OrderListItem} from '../../components/OrderListItem';

const historyList = [
  {
    id: 'sdkjf',
    title: '欧洲41国 (1GB 7天)',
    subtitle: '三大纪律咖啡',
    status: 'CANCELED',
  },
  {
    id: 'sdkjfsdf',
    title: '亚太13国 (1GB 7天)',
    subtitle: '三大纪律咖啡',
    status: 'CANCELED',
  },
  {
    id: 'sdksdafejf',
    title: '欧洲41国 (1GB 7天)',
    subtitle: '三大纪律咖啡',
    status: 'CANCELED',
  },
  {
    id: 'sdkfwejfsdf',
    title: '亚太13国 (1GB 7天)',
    subtitle: '三大纪律咖啡',
    status: 'CANCELED',
  },
  {
    id: 'sdkjasdfwef',
    title: '欧洲41国 (1GB 7天)',
    subtitle: '三大纪律咖啡',
    status: 'CANCELED',
  },
  {
    id: 'sdkjfwesdfsdf',
    title: '亚太13国 (1GB 7天)',
    subtitle: '三大纪律咖啡',
    status: 'CANCELED',
  },
  {
    id: 'sdkasdfewjf',
    title: '欧洲41国 (1GB 7天)',
    subtitle: '三大纪律咖啡',
    status: 'CANCELED',
  },
  {
    id: 'sdkjfasdfewsdf',
    title: '亚太13国 (1GB 7天)',
    subtitle: '三大纪律咖啡',
    status: 'CANCELED',
  },
  {
    id: 'sdkasfejf',
    title: '欧洲41国 (1GB 7天)',
    subtitle: '三大纪律咖啡',
    status: 'CANCELED',
  },
  {
    id: 'sdkjfsadfesdf',
    title: '亚太13国 (1GB 7天)',
    subtitle: '三大纪律咖啡',
    status: 'CANCELED',
  },
];

export const OrderHistory = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitleVisible: false,
    });
  }, [navigation]);
  return (
    <View
      style={{
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ffffff',
      }}>
      <FlatList
        data={historyList}
        renderItem={HistoryItem}
        ItemSeparatorComponent={SeparatorComponent}
      />
    </View>
  );
};

// 子项组件
const HistoryItem = props => {
  return <OrderListItem {...props} />;
};

//分隔组件
const SeparatorComponent = () => <View style={{height: 20}} />;
