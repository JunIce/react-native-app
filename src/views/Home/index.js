import * as React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import {Col, Row, Grid} from 'react-native-easy-grid';
import Swiper from 'react-native-swiper';
import {getBannerList, getHomeCityList} from '../../api';
import {chunk} from '../../util';

export class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      banners: [],
      cities: [],
      loading: false,
      refreshing: false,
    };
  }

  componentDidMount() {
    this.fetchData();
    console.log(this.props);
  }

  fetchData = () => {
    this.setState({
      loading: true,
    });

    Promise.all([getBannerList(), getHomeCityList()]).then(res => {
      this.setState({
        loading: false,
        banners: res[0].data || [],
        cities: res[1].data || [],
      });
    });
  };

  _onRefresh = () => {
    this.setState({
      refreshing: true,
    });

    setTimeout(() => {
      this.setState({refreshing: false});
    }, 3000);
  };

  render() {
    const {banners} = this.state;

    if (this.state.loading) {
      return <ActivityIndicator />;
    }

    return (
      <ScrollView
        style={styles.page}
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
          />
        }>
        <View style={styles.pageView}>
          <View>
            <Swiper
              style={{height: 100}}
              showsButtons={false}
              paginationStyle={{bottom: 4}}>
              {banners.map(b => {
                return (
                  <TouchableOpacity
                    key={b}
                    onPress={() =>
                      this.props.navigation.navigate('CityDetail')
                    }>
                    <View>
                      <Image
                        source={{
                          uri: b.url,
                        }}
                        style={styles.bannerImage}
                      />
                    </View>
                  </TouchableOpacity>
                );
              })}
            </Swiper>
          </View>

          <RenderTitle title="国内流量充值" />

          <View>
            <Image
              source={{
                uri:
                  'http://meisudci.oss-cn-beijing.aliyuncs.com/bn_thumb/MSBQ13715300335956.jpg?x-oss-process=style/bn_info_thumb',
              }}
              style={styles.bannerImage}
            />
          </View>

          <View>
            <RenderTitle
              title="境外流量充值"
              rightBtn={
                <Text
                  style={styles.subtitleNext}
                  onPress={() =>
                    this.props.navigation.navigate('AllCity', {tab: 'ALL'})
                  }>
                  查看全部
                </Text>
              }
              showArrow
            />
            {this._renderCityRow()}
          </View>

          <View>
            <RenderTitle
              title="境外跨地区通用"
              showArrow
              rightBtn={
                <Text
                  style={styles.subtitleNext}
                  onPress={() =>
                    this.props.navigation.navigate('AllCity', {tab: 'SECTION'})
                  }>
                  查看全部
                </Text>
              }
            />
            <ScrollView
              horizontal={true} // 横向
              showsHorizontalScrollIndicator={false}>
              <View
                style={{
                  flexDirection: 'row',
                  marginLeft: -8,
                  marginRight: -8,
                }}>
                {new Array(3).fill(1).map((i, idx) => (
                  <HorizontalItem key={idx} />
                ))}
              </View>
            </ScrollView>
          </View>

          <View style={{height: 200}} />
        </View>
      </ScrollView>
    );
  }

  _renderCityRow() {
    let childlist = this._renderCityCol(this.state.cities);

    let newList = chunk(childlist, 3);
    return newList.map((item, idx) => (
      <Grid style={{marginBottom: 10}} key={idx}>
        <Row style={{marginLeft: -8, marginRight: -8}}>{item}</Row>
      </Grid>
    ));
  }

  _renderCityCol(list) {
    return list.map(item => (
      <Col key={item.city}>
        <View style={{paddingLeft: 8, paddingRight: 8}}>
          <RowItem {...this.props} {...item} />
        </View>
      </Col>
    ));
  }
}

const RenderTitle = props => {
  return (
    <View style={[styles.subtitlebox, styles.titleflex]}>
      <Text style={styles.subtitle}>{props.title}</Text>
      <View>
        {props.rightBtn && (
          <TouchableOpacity>
            <View style={styles.subtitleNextContainer}>
              <Text style={styles.subtitleNext}>{props.rightBtn}</Text>
              {props.showArrow && (
                <Icon
                  style={styles.subtitleNextIcon}
                  name="right"
                  size={10}
                  color="#999"
                />
              )}
            </View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const HorizontalItem = props => {
  return (
    <View
      style={{
        flex: 1,
        width: 160,
        height: 100,
        paddingLeft: 8,
        paddingRight: 8,
      }}>
      <Image
        source={{
          uri:
            'https://hbimg.huabanimg.com/0ecd677f6fcfd7663dde73bfb9fa4b094c94625758661-mCsxOL_sq236bl4',
        }}
        style={{height: 100, borderRadius: 4, overflow: 'hidden'}}
      />
    </View>
  );
};

const RowItem = props => {
  return (
    <View style={{borderRadius: 4, overflow: 'hidden'}}>
      <TouchableOpacity
        onPress={() =>
          props.navigation.navigate('CityDetail', {
            city: props.name,
          })
        }>
        <View>
          <Image
            source={{
              uri:
                'https://hbimg.huabanimg.com/9455f38844901d4bacd5becb1fd1a8f5e95dd8636123-eEk3as_fw658',
            }}
            style={{height: 76}}
          />
          <View
            style={{
              width: '100%',
              height: 76,
              backgroundColor: 'rgba(0,0,0,0.5)',
              position: 'absolute',
              zIndex: 1,
            }}
          />
          <View
            style={{
              width: '100%',
              height: 76,
              position: 'absolute',
              zIndex: 2,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                height: 76,
              }}>
              <Text style={{color: '#fff', fontSize: 18, fontWeight: 'bold'}}>
                {props.name}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            padding: 8,
            borderLeftWidth: 0.5,
            borderRightWidth: 0.5,
            borderBottomWidth: 0.5,
            borderColor: '#ccc',
            flex: 1,
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <Text style={{color: 'orange', fontSize: 12}}> {props.price}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },
  pageView: {
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  bannerImage: {
    width: '100%',
    height: 100,
    borderRadius: 4,
  },
  titleflex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subtitlebox: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#333',
  },
  subtitleNextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  subtitleNext: {
    fontSize: 14,
    color: '#999',
  },
  subtitleNextIcon: {
    marginLeft: 8,
  },
});
