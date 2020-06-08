import * as React from 'react';
import {Text, Image, View, StyleSheet, FlatList} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import {FlowListItem} from '../../components/FlowListItem';
import {PageLoading} from '../../components/PageLoading';

import {getCityDetail} from '../../api';

export class CityDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      loading: true,
    };
  }

  componentDidMount() {
    const params = this.props.route.params;
    this.props.navigation.setOptions({
      headerBackTitleVisible: false,
      title: params ? params.city : '城市详情',
    });
    this.getDetail();
  }

  getDetail = () => {
    this.setState({
      loading: true,
    });
    getCityDetail().then(res => {
      this.setState({
        list: res.data.list,
        loading: false,
      });
    });
  };

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }
    return (
      <ScrollView style={styles.page}>
        <View>
          <Image
            style={styles.backgroundImage}
            source={{
              uri:
                'https://hbimg.huabanimg.com/62c225941f47f7df533e1dc378cd6e3beddfabaf34922-0ECiKt_fw658',
            }}
          />
        </View>
        <View style={styles.pagepadding}>
          <View>
            <View>
              <Text>流量包套餐</Text>
            </View>
            <View style={{marginTop: 10}}>
              <FlatList
                data={this.state.list}
                renderItem={props => <FlowListItem {...props} />}
                ItemSeparatorComponent={() => <View style={{height: 10}} />}
              />
            </View>
          </View>
        </View>
      </ScrollView>
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
  backgroundImage: {
    height: 150,
    width: '100%',
  },
  pagepadding: {
    padding: 20,
  },
});
