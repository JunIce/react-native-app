import React from 'react';
import {Text} from 'react-native';
import {ActivityIndicator} from 'react-native';

export const Loading = () => {
  return (
    <>
      <ActivityIndicator color="blue" />
      <Text style={{color: '#666', fontSize: 12, marginTop: 10}}>加载中</Text>
    </>
  );
};
