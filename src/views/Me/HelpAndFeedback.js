import React, {useLayoutEffect} from 'react';
import {View, Text} from 'react-native';

export const HelpScreen = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitleVisible: false,
    });
  }, [navigation]);
  return (
    <View>
      <Text>帮助和反馈</Text>
    </View>
  );
};
