import * as React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
export class CityAll extends React.Component {
  renderSeparator = () => {
    return (
      <View
        style={{
          height: 100,
          width: '100%',
          backgroundColor: '#000',
        }}
      />
    );
  };
  space() {
    return <View style={{height: 50, width: 2, backgroundColor: 'black'}} />;
  }

  render() {
    return (
      <View style={styles.page}>
        <ScrollableTabView>
          <View tabLabel="单国/地区">
            <View style={styles.space}>
              <FlatList
                data={[{key: 'a'}, {key: 'b'}]}
                renderItem={({item}) => (
                  <View>
                    <Text style={{fontSize: 20, textAlign: 'center'}}>
                      {item.key}
                    </Text>
                  </View>
                )}
              />
            </View>
          </View>
          <View tabLabel="多国/地区">
            <View style={styles.pagecontent}>
              <FlatList
                data={[{key: 'a'}, {key: 'b'}]}
                renderItem={({item}) => <Text>{item.key}</Text>}
              />
            </View>
          </View>
        </ScrollableTabView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  pagecontent: {
    padding: 20,
  },
});
