import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Toast from 'react-native-root-toast';

export const FlowListItem = ({item}) => {
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.card_title}>{item.title}</Text>
        <Text style={styles.card_sub_title}>{item.sub_title}</Text>
      </View>
      <View style={styles.under_box}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.card_current_price}>{item.current}</Text>
          <Text style={styles.card_old_price}>{item.old}</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            Toast.show('购买操作', {
              position: Toast.positions.CENTER,
              shadow: false,
            });
          }}>
          <Text style={styles.sale_button}>购买</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  under_box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  card: {
    borderWidth: 0.5,
    borderColor: '#cccc',
    borderRadius: 8,
    padding: 10,
  },
  card_title: {
    color: '#333',
  },
  card_sub_title: {
    color: '#999',
    fontSize: 12,
    marginTop: 10,
  },
  card_current_price: {
    color: 'red',
    fontSize: 12,
  },
  card_old_price: {
    color: '#ccc',
    textDecorationLine: 'line-through',
    fontSize: 12,
    marginLeft: 10,
  },
  sale_button: {
    display: 'flex',
    borderWidth: 0.5,
    borderColor: 'blue',
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 12,
    paddingRight: 12,
    borderRadius: 14,
    fontSize: 12,
    color: 'blue',
  },
});
