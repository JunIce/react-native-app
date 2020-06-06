import * as React from 'react';
import {Text, View, StyleSheet, FlatList, SectionList} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import nations from './nation.json';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const Letters = new Array(26)
  .fill(97)
  .map((i, idx) => String.fromCharCode(i + idx).toLocaleUpperCase());
export class CityAll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nations: nations,
      letters: Letters,
    };

    this.props.navigation.setOptions({
      headerBackTitleVisible: false,
    });
  }

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

  indexTab = idx => {
    console.log(idx);
    this.sectionListRef.scrollToLocation({
      sectionIndex: idx,
      itemIndex: 0,
      viewPosition: 0,
      viewOffset: 0,
    });
  };

  render() {
    return (
      <View style={styles.page}>
        <ScrollableTabView>
          <View tabLabel="单国/地区">
            <View style={styles.space}>
              <SectionList
                ref={ref => (this.sectionListRef = ref)}
                sections={nations}
                renderSectionHeader={({section, separators}) => (
                  <View style={{padding: 18, backgroundColor: '#ffffff'}}>
                    <Text style={{fontWeight: 'bold'}}>
                      {section.key}({section.data.length})
                    </Text>
                    {separators}
                  </View>
                )}
                renderItem={({item}) => (
                  <View style={{padding: 20}}>
                    <Text style={{fontSize: 16}}>{item.label}</Text>
                  </View>
                )}
                ItemSeparatorComponent={() => (
                  <View
                    style={{
                      height: 1,
                      backgroundColor: '#cccccc',
                      marginLeft: 20,
                      marginRight: 20,
                    }}
                  />
                )}
                stickySectionHeadersEnabled={true}
                keyExtractor={(item, index) => {
                  return item + index;
                }}
              />

              <View style={{position: 'absolute', height: '100%', right: 0}}>
                <View
                  style={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                  }}>
                  {this.state.letters.map((l, idx) => (
                    <TouchableWithoutFeedback
                      key={l}
                      onPress={() => this.indexTab(idx)}>
                      <View
                        key={l}
                        style={{
                          paddingTop: 2,
                          paddingBottom: 2,
                          paddingRight: 4,
                          paddingLeft: 4,
                        }}>
                        <Text>{l}</Text>
                      </View>
                    </TouchableWithoutFeedback>
                  ))}
                </View>
              </View>
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
