import * as React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export const AboutShop = () => {
  return (
    <View style={styles.page}>
      <View>
        <Image
          style={styles.image}
          source={{
            uri:
              'http://t8.baidu.com/it/u=3571592872,3353494284&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1588578939&t=ee92cdee48130f14a8e0efb136d6d50b',
          }}
        />
      </View>
      <View>
        <Text style={styles.title}>帮助和反馈</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.content}>
          随着湖北省及武汉市所有新冠肺炎重症病例实现清零，广大援鄂医务工作者、疾控人员和新闻工作者陆续回撤，全国疫情防控日趋常态化，社会生活的重心进一步转移到全面复工复产和恢复生产生活秩序上来。
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 4,
  },
  title: {
    fontSize: 20,
    color: '#333',
    marginTop: 20,
  },
  contentContainer: {
    width: '80%',
    marginTop: 20,
  },
  content: {
    color: '#999',
    fontSize: 16,
  },
});
