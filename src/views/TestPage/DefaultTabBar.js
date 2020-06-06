import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export class CustomDefaultTabBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    return (
      <>
        <View>
          <Text>dsd</Text>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  ScrollableTabView: {
    borderBottomWidth: 0,
  },
  customTabBarUnderline: {
    width: 30,
    height: 2,
    borderRadius: 4,
    backgroundColor: 'red',
    alignContent: 'center',
  },
});
