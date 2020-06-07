import * as React from 'react';
import {Text, View, StyleSheet, FlatList, SectionList} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import nations from './nation.json';
import {
  TouchableWithoutFeedback,
  TouchableHighlight,
} from 'react-native-gesture-handler';
import Toast from 'react-native-root-toast';

const Letters = new Array(26)
  .fill(97)
  .map((i, idx) => String.fromCharCode(i + idx).toLocaleUpperCase());

const tabPage = tab => {
  switch (tab) {
    case 'ALL':
      return 0;
    case 'SECTION':
      return 1;
    default:
      return 0;
  }
};
export class CityAll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nations: nations,
      letters: Letters,
      sectionList: [
        {
          title: '拉美14国',
        },
        {
          title: '欧洲42国',
        },
        {
          title: '新马泰地区',
        },
        {
          title: '亚太14地区',
        },
      ],
      initialPage: 0,
    };

    this.props.navigation.setOptions({
      headerBackTitleVisible: false,
    });

    let params = this.props.route.params;
    if (params) {
      this.state.initialPage = tabPage(params.tab);
    }
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

  indexTab = (idx, text) => {
    Toast.show(text, {
      position: Toast.positions.CENTER,
      shadow: false,
    });
    this.sectionListRef.scrollToLocation({
      sectionIndex: idx,
      itemIndex: 0,
      viewPosition: 0,
      viewOffset: 0,
    });
  };

  _onPress = item => {
    console.log(item);
  };

  render() {
    return (
      <View style={styles.page}>
        <ScrollableTabView
          tabBarActiveTextColor={'blue'}
          tabBarInactiveTextColor="#333333"
          tabBarTextStyle={{fontSize: 14}}
          tabBarUnderlineStyle={{
            height: 1,
            backgroundColor: 'blue',
          }}
          initialPage={this.state.initialPage}
          onChangeTab={({i}) => {
            this.setState({
              page: i,
            });
          }}>
          <View tabLabel="单国/地区">
            <View>
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
                  return item.value + index;
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
                      onPress={() => this.indexTab(idx, l)}>
                      <View
                        key={l}
                        style={{
                          paddingTop: 2,
                          paddingBottom: 2,
                          paddingRight: 10,
                          paddingLeft: 10,
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
            <View>
              <FlatList
                data={this.state.sectionList}
                renderItem={({item, index, separators}) => (
                  <TouchableHighlight
                    onPress={() => this._onPress(item)}
                    activeOpacity={0.3}
                    underlayColor="#ffffff">
                    <View
                      style={{
                        paddingTop: 20,
                        paddingBottom: 20,
                        marginLeft: 20,
                        marginRight: 20,
                      }}>
                      <Text>{item.title}</Text>
                    </View>
                  </TouchableHighlight>
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
                keyExtractor={(item, index) => `${item}_${index}`}
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
