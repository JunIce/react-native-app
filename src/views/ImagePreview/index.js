import React, {Component} from 'react';
import {
  View,
  Modal,
  Dimensions,
  ActivityIndicator,
  CameraRoll,
} from 'react-native';

import ImageViewer from 'react-native-image-zoom-viewer';

const screenHeight = Dimensions.get('window').height;
export class ImagePreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animating: true,
      images: [
        {
          url:
            'https://img2.woyaogexing.com/2020/04/29/cdaa3f375bc34674aa5d2eda537a14d5!400x400.jpeg',
        },
        {
          url:
            'https://img2.woyaogexing.com/2020/04/29/95a6d4f08e2e42f4a3edc6fd5f262b70!400x400.jpeg',
        },
        {
          url:
            'https://img2.woyaogexing.com/2020/04/29/a141bd89d89b415cb24a512b79af7c10!400x400.jpeg',
        },
        {
          url:
            'https://img2.woyaogexing.com/2020/04/29/c59b4d48d2264127a2077a67e93dc1be!400x400.jpeg',
        },
        {
          url:
            'https://img2.woyaogexing.com/2020/04/29/8a5c98f183054628aa315c52b8cd04c1!400x400.jpeg',
        },
        {
          url:
            'https://img2.woyaogexing.com/2020/04/29/35bcd0e5b5ef426299203b3adade3e87!400x400.jpeg',
        },
        {
          url:
            'https://img2.woyaogexing.com/2020/04/29/b4808b2c048b409687e5719a520decda!400x400.jpeg',
        },
        {
          url:
            'https://img2.woyaogexing.com/2020/04/29/4640be00f0da470ab40f958cbe2f257c!400x400.jpeg',
        },
      ],
      modalVisible: false,
    };

    this.savePhoto = this.savePhoto.bind(this);
  }
  _Close = () => {
    this.setState({
      modalVisible: false,
    });
  };
  renderLoad = () => {
    //这里是写的一个loading
    return (
      <View style={{marginTop: screenHeight / 2 - 20}}>
        <ActivityIndicator animating={this.state.animating} size={'large'} />
      </View>
    );
  };
  savePhoto() {
    let index = this.props.curentImage;
    let url = this.props.imaeDataUrl[index];
    let promise = CameraRoll.saveToCameraRoll(url);
    promise
      .then(function(result) {
        alert('已保存到系统相册');
      })
      .catch(function(error) {
        alert('保存失败！\n' + error);
      });
  }

  showModal = () => {
    console.log(1);
    this.setState({modalVisible: true});
  };

  render() {
    return (
      <>
        <Modal visible={true} transparent={true}>
          <ImageViewer
            imageUrls={this.state.images} // 照片路径
            enableImageZoom={false} // 是否开启手势缩放
            saveToLocalByLongPress={true} //是否开启长按保存
            index={this.props.curentImage} // 初始显示第几张
            // failImageSource={} // 加载失败图片
            loadingRender={this.renderLoad}
            enableSwipeDown={false}
            menuContext={{saveToLocal: '保存图片', cancel: '取消'}}
            onChange={index => {}} // 图片切换时触发
            onClick={this._Close}
            onSave={url => {
              this.savePhoto(url);
            }}
          />
        </Modal>
      </>
    );
  }
}
