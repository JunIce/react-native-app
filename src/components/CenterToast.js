import React from 'react';
import {View} from 'react-native';
import Toast from 'react-native-root-toast';

export default function CenterToast(props) {
  return (
    <Toast
      position={Toast.positions.CENTER}
      shadow={false}
      visible={props.visible}>
      <View style={{width: 100, height: 100}}>{props.children}</View>
    </Toast>
  );
}
