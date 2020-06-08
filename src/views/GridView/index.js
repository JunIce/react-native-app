import React, {PureComponent} from 'react';
import {View, StyleSheet, FlatList, Dimensions, Image} from 'react-native';
import * as Color from '../../constants/colors';

const screenW = Dimensions.get('window').width;

// 一些常量设置
const cols = 3; // 列数
const left = 10; // 左右边距
const top = 10; // 上下边距
const ImageWH = (screenW - (cols + 1) * left) / cols; // 图片大小

export class GridView extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      title: 'hello world',
      data: [
        {
          uri:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588172416747&di=84e374899b35a534b5733e4714c1ec12&imgtype=0&src=http%3A%2F%2Fa2.att.hudong.com%2F36%2F48%2F19300001357258133412489354717.jpg',
        },
        {
          uri:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537850063216&di=0f4f9bbaaee6bafe24fab3e5f472c481&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201512%2F12%2F20151212120309_BduTC.jpeg',
        },
        {
          uri:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537850063214&di=f73de557becc9667bb105fdfecd39426&imgtype=0&src=http%3A%2F%2Fimgq.duitang.com%2Fuploads%2Fitem%2F201503%2F22%2F20150322171820_UtwMk.thumb.700_0.jpeg',
        },
        {
          uri:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588172416747&di=7fa4eba60d38c27f52f74a2fd9fa167a&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Fd62a6059252dd42a1c362a29033b5bb5c9eab870.jpg',
        },
        {
          uri:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537850063210&di=b936ead7972601ea0c12e8648a8f1df0&imgtype=0&src=http%3A%2F%2Fpic31.photophoto.cn%2F20140403%2F0020033029624335_b.jpg',
        },
        {
          uri:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537850155795&di=72f9878782ad4b80ea320111effe0b71&imgtype=0&src=http%3A%2F%2Fpic27.photophoto.cn%2F20130420%2F0005018421916914_b.jpg',
        },
        {
          uri:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537850155794&di=4efaecca3f367346ff49c42f8f89d9f2&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201206%2F26%2F20120626190359_MjB3s.thumb.700_0.jpeg',
        },
      ],
    };
    this.renderRow = this.renderRow.bind(this);
  }
  componentDidMount() {}

  // 返回cell
  renderRow(rowData) {
    return (
      <View style={styles.innerViewStyle}>
        <Image source={{uri: rowData.item.uri}} style={styles.iconStyle} />
      </View>
    );
  }

  _keyExtractor = (item, index) => {
    return item.uri + index;
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={{backgroundColor: Color.WHITE_FFFFFF}}
          renderItem={this.renderRow}
          data={this.state.data}
          keyExtractor={this._keyExtractor}
          numColumns={cols}
          columnWrapperStyle={styles.columnStyle}
          horizontal={false}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.GRAY_F0F2F5,
  },
  columnStyle: {
    // marginLeft: 10,
    // marginRight: 10
  },
  innerViewStyle: {
    width: ImageWH,
    height: ImageWH * 0.8,
    marginLeft: left,
    marginTop: top,
    // 文字内容居中对齐
    alignItems: 'center',
  },
  iconStyle: {
    width: ImageWH,
    height: ImageWH * 0.8,
  },
});
