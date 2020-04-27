import * as React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';

export const UserTerms = () => {
  return (
    <ScrollView style={styles.page}>
      <View>
        <View>
          <Text style={styles.title}>
            一、用户保证对其上传的图片或素材享有合法的所有权或使用权
          </Text>
          <Text style={styles.text}>
            （一） "我要个性网"上的图片或素材均由用户上传
          </Text>
          <Text style={styles.text}>
            （二）
            若相关图片或素材侵犯了第三人的知识产权，一切法律后果均由该用户承担。
          </Text>
        </View>
        <View>
          <Text style={styles.title}>
            二、除用户上传的图片或素材外，"我要个性网"享有"我要个性网"的相关知识产权所有权
          </Text>
          <Text style={styles.text}>
            (一）
            "我要个性网"相关知识产权包括但不限于："我要个性网"商标、博客、设计、广告等创造性、独创性智力成果。
          </Text>
          <Text style={styles.text}>
            （二）
            任何单位和个人未经"我要个性网"书面同意，不得使用"我要个性网"相关知识产权，否则"我要个性网"将依法追究其法律责任。
          </Text>
          <Text>（三）不得把自己的用户名和密码交给他人使用。</Text>
        </View>
        <View>
          <Text style={styles.title}>
            三、"我要个性网"仅负有法定的信息管理义务
          </Text>
          <Text style={styles.text}>
            （一）
            "我要个性网"作为图片或素材的交易、共享、存储平台，管理信息的能力有限，仅负有法定的删除、屏蔽、断开连接等义务。
          </Text>
          <Text style={styles.text}>
            （二）
            "我要个性网"仅对公众人物、知名明星等侵权信息明显度较高的肖像类图片或素材进行审查。
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 10,
  },
  title: {
    fontSize: 18,
    color: '#333',
    marginTop: 15,
  },
  text: {
    marginTop: 8,
    color: '#666',
  },
});
