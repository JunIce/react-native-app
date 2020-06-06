import React from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const WINDOW_WIDTH = Dimensions.get('window').width;

export default function SearchView() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Icon name="search" color="#666" size={16} />
        <Text style={styles.text}>搜索国家或地区1</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f4f4f4',
    width: WINDOW_WIDTH - 40,
    height: 30,
    borderRadius: 20,
  },
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  text: {
    color: '#666',
    lineHeight: 30,
    fontSize: 14,
    marginLeft: 10,
  },
});
