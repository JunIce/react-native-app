import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
// import {CustomDefaultTabBar} from './DefaultTabBar';
import ScrollableTabBar from './CustomTabBar';

export class TestPage extends React.Component {
  handleTabChange = e => {
    console.log(e);
  };
  render() {
    return (
      <>
        <ScrollableTabView
          onChangeTab={this.handleTabChange}
          style={styles.ScrollableTabView}
          tabBarActiveTextColor="red"
          tabBarInactiveTextColor="#666"
          renderTabBar={() => (
            <ScrollableTabBar
              style={{
                borderBottomWidth: 0,
              }}
              underlineStyle={styles.customTabBarUnderline}
              scrollOffset={10}
              tabsContainerStyle={{borderBottomHeight: 0}}
            />
          )}>
          <View tabLabel="label-left">
            <View>
              <Text>1</Text>
            </View>
          </View>
          <View tabLabel="label-right">
            <View>
              <Text>2</Text>
            </View>
          </View>
        </ScrollableTabView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  ScrollableTabView: {
    borderBottomWidth: 0,
  },
  customTabBarUnderline: {
    height: 2,
    borderRadius: 4,
    backgroundColor: 'red',
    alignContent: 'center',
  },
});
