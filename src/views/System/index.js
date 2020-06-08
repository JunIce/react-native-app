import * as React from 'react';
import {View, Text, Dimensions} from 'react-native';
import {
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native-gesture-handler';

const screenW = Dimensions.get('window').width;

export class SettingsScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
    };
  }

  OrderEmptyComponent = () => {
    return (
      <View
        style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View>
            <Text style={{fontSize: 20, color: '#999'}}>您还没有订单</Text>
          </View>
          <View style={{position: 'absolute', bottom: 50}}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Shop');
              }}>
              <View
                style={{
                  backgroundColor: 'blue',
                  width: screenW - 40,
                  paddingTop: 10,
                  paddingBottom: 10,
                  borderRadius: 100,
                }}>
                <Text style={{color: '#fff', textAlign: 'center'}}>
                  前往购买
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  render() {
    if (this.state.list.length === 0) {
      return this.OrderEmptyComponent();
    }

    return (
      <View style={{flexDirection: 'column', flex: 1, backgroundColor: '#fff'}}>
        <FlatList data={this.state.list} />
      </View>
    );
  }
}
