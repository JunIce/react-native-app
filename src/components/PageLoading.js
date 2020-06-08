import React from 'react';
import {View} from 'react-native';
import {Loading} from './Loading';

export const PageLoading = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Loading />
    </View>
  );
};
