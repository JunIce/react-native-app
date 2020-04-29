import * as React from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet,
  FlatList,
  TouchableHighlight,
} from 'react-native';
import {getCityDetail} from '../../api';

export class CityDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  componentDidMount() {
    const {city} = this.props.route.params;
    this.props.navigation.setOptions({title: city || '城市详情'});
    this.getDetail();
  }

  getDetail = () => {
    getCityDetail().then(res => {
      this.setState({
        list: res.data.list,
      });
    });
  };

  renderCard = () => {
    return this.state.list.map(card => (
      <View style={styles.card} key={card.id}>
        <View>
          <Text style={styles.card_title}>{card.title}</Text>
          <Text style={styles.card_sub_title}>{card.sub_title}</Text>
        </View>
        <View style={styles.under_box}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.card_current_price}>{card.current}</Text>
            <Text style={styles.card_old_price}>{card.old}</Text>
          </View>
          <TouchableHighlight>
            <Text style={styles.sale_button}>购买</Text>
          </TouchableHighlight>
        </View>
      </View>
    ));
  };
  render() {
    return (
      <View style={styles.page}>
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
            <View style={{marginTop: 10}}>{this.renderCard()}</View>
          </View>
        </View>
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
  backgroundImage: {
    height: 150,
    width: '100%',
  },
  pagepadding: {
    padding: 20,
  },
  card: {
    borderWidth: 0.5,
    borderColor: '#cccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
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
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 14,
    fontSize: 12,
    color: 'blue',
  },
  under_box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
});
