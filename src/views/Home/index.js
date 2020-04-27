import * as React from 'react';
import {View, Text, Button, Image, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import {Col, Row, Grid} from 'react-native-easy-grid';

export class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView style={styles.page}>
        <View style={styles.pageView}>
          <View>
            <Image
              source={{
                uri:
                  'http://meisudci.oss-cn-beijing.aliyuncs.com/bn_thumb/MSBQ13715300335956.jpg?x-oss-process=style/bn_info_thumb',
              }}
              style={styles.bannerImage}
            />
          </View>
          <View style={styles.subtitlebox}>
            <Text style={styles.subtitle}>国内流量充值</Text>
          </View>

          <View>
            <Image
              source={{
                uri:
                  'http://meisudci.oss-cn-beijing.aliyuncs.com/bn_thumb/MSBQ13715300335956.jpg?x-oss-process=style/bn_info_thumb',
              }}
              style={styles.bannerImage}
            />
          </View>

          <View style={[styles.subtitlebox, styles.titleflex]}>
            <Text style={styles.subtitle}>境外流量充值</Text>
            <View>
              <View style={styles.subtitleNextContainer}>
                <Text style={styles.subtitleNext}>查看全部</Text>
                <Icon
                  style={styles.subtitleNextIcon}
                  name="right"
                  size={10}
                  color="#ccc"
                />
              </View>
            </View>
          </View>

          <View>
            <Grid>
              <Row style={{marginLeft: -8, marginRight: -8}}>
                <Col>
                  <View style={{paddingLeft: 8, paddingRight: 8}}>
                    <RowItem />
                  </View>
                </Col>
                <Col>
                  <View style={{paddingLeft: 8, paddingRight: 8}}>
                    <RowItem />
                  </View>
                </Col>
                <Col>
                  <View style={{paddingLeft: 8, paddingRight: 8}}>
                    <RowItem />
                  </View>
                </Col>
              </Row>
            </Grid>
            <Grid style={{marginTop: 10}}>
              <Row style={{marginLeft: -8, marginRight: -8}}>
                <Col>
                  <View style={{paddingLeft: 8, paddingRight: 8}}>
                    <RowItem />
                  </View>
                </Col>
                <Col>
                  <View style={{paddingLeft: 8, paddingRight: 8}}>
                    <RowItem />
                  </View>
                </Col>
                <Col>
                  <View style={{paddingLeft: 8, paddingRight: 8}}>
                    <RowItem />
                  </View>
                </Col>
              </Row>
            </Grid>
            <Grid style={{marginTop: 10}}>
              <Row style={{marginLeft: -8, marginRight: -8}}>
                <Col>
                  <View style={{paddingLeft: 8, paddingRight: 8}}>
                    <RowItem />
                  </View>
                </Col>
                <Col>
                  <View style={{paddingLeft: 8, paddingRight: 8}}>
                    <RowItem />
                  </View>
                </Col>
                <Col>
                  <View style={{paddingLeft: 8, paddingRight: 8}}>
                    <RowItem />
                  </View>
                </Col>
              </Row>
            </Grid>
          </View>

          <View style={[styles.subtitlebox, styles.titleflex]}>
            <Text style={styles.subtitle}>境外跨地区通用</Text>
            <View>
              <View style={styles.subtitleNextContainer}>
                <Text style={styles.subtitleNext}>查看全部</Text>
                <Icon
                  style={styles.subtitleNextIcon}
                  name="right"
                  size={10}
                  color="#ccc"
                />
              </View>
            </View>
          </View>

          <View>
            <ScrollView
              horizontal={true} // 横向
              showsHorizontalScrollIndicator={false}>
              <View
                style={{
                  width: 600,
                  flex: 1,
                  flexDirection: 'row',
                  marginLeft: -8,
                  marginRight: -8,
                }}>
                <View
                  style={{
                    flex: 1,
                    width: 200,
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
                <View
                  style={{
                    flex: 1,
                    width: 200,
                    height: 100,
                    paddingLeft: 8,
                    paddingRight: 8,
                  }}>
                  <Image
                    source={{
                      uri:
                        'https://hbimg.huabanimg.com/0ecd677f6fcfd7663dde73bfb9fa4b094c94625758661-mCsxOL_sq236bl4',
                    }}
                    style={{height: 100}}
                  />
                </View>
                <View
                  style={{
                    flex: 1,
                    width: 200,
                    height: 100,
                    paddingLeft: 8,
                    paddingRight: 8,
                  }}>
                  <Image
                    source={{
                      uri:
                        'https://hbimg.huabanimg.com/0ecd677f6fcfd7663dde73bfb9fa4b094c94625758661-mCsxOL_sq236bl4',
                    }}
                    style={{height: 100}}
                  />
                </View>
              </View>
            </ScrollView>
          </View>

          <View style={{height: 200}} />
        </View>
      </ScrollView>
    );
  }
}

const RowItem = () => {
  return (
    <View style={{borderRadius: 4, overflow: 'hidden'}}>
      <View>
        <Image
          source={{
            uri:
              'https://hbimg.huabanimg.com/9455f38844901d4bacd5becb1fd1a8f5e95dd8636123-eEk3as_fw658',
          }}
          style={{height: 76}}
        />
        <View style={{width: '100%', height: 76, position: 'absolute'}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              height: 76,
            }}>
            <Text style={{color: '#fff', fontSize: 18, fontWeight: 'bold'}}>
              中国香港
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
        <Text style={{color: 'orange', fontSize: 12}}>12.90元</Text>
      </View>
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
    fontSize: 18,
    color: '#666',
  },
  subtitleNextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  subtitleNext: {
    fontSize: 14,
    color: '#ccc',
  },
  subtitleNextIcon: {
    marginLeft: 8,
  },
});
