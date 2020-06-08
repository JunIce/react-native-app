import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Toast from 'react-native-root-toast';

export const OrderListItem = ({item}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        Toast.show(item.title);
      }}>
      <View style={{borderWidth: 0.5, borderColor: '#ccc'}}>
        <View style={{padding: 20}}>
          <Text style={{fontSize: 16, color: '#333'}}>{item.title}</Text>
          <Text style={{fontSize: 14, color: '#999', marginTop: 10}}>
            {item.subtitle}
          </Text>
        </View>
        <View
          style={{
            borderTopWidth: 0.5,
            borderTopColor: '#ccc',
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 20,
            paddingRight: 20,
          }}>
          {renderButtonBox(item)}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const renderButtonBox = item => {
  switch (item.status) {
    case 'WAITING_PAID':
      return <WaitForPaid />;

    case 'CANCELED':
      return <CanceledButtonBox />;
  }
};

// 待支付
const WaitForPaid = () => {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={{color: '#999', fontSize: 12}}>
          请在1小时内完成支付， 未完成支付订单讲自动关闭
        </Text>

        <TouchableOpacity
          onPress={() => {
            Toast.show('支付按钮');
          }}>
          <View
            style={{
              paddingTop: 4,
              paddingBottom: 4,
              paddingLeft: 8,
              paddingRight: 8,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: 'blue',
            }}>
            <Text style={{color: 'blue', fontSize: 12}}>支付</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

// 已取消
const CanceledButtonBox = () => {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={{color: '#999', fontSize: 12}}>已关闭</Text>

        <TouchableOpacity
          onPress={() => {
            Toast.show('购买按钮');
          }}>
          <View
            style={{
              paddingTop: 4,
              paddingBottom: 4,
              paddingLeft: 8,
              paddingRight: 8,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: 'blue',
            }}>
            <Text style={{color: 'blue', fontSize: 12}}>再次购买</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};
