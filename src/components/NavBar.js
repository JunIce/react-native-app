import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  StatusBar,
  Platform,
} from 'react-native';

const PADDING_TOP = Platform.OS === 'ios' ? 20 : 0;

export default class NavBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {style, left, right, title} = this.props;
    const styles = navBarStyles;

    const navBarWrapperStyle = [
      styles.navBarWrapper,
      style,
      {
        paddingTop: PADDING_TOP,
      },
    ];

    const leftBtn = (
      <TouchableOpacity>
        <Text style={[styles.btn]}>{left}</Text>
      </TouchableOpacity>
    );

    const rightBtn = right ? (
      <TouchableOpacity>
        <Text style={[styles.btn, styles.rightBtn]}>{right}</Text>
      </TouchableOpacity>
    ) : (
      <Text style={styles.btn} />
    );

    return (
      <>
        <StatusBar barStyle="default" />
        <View style={navBarWrapperStyle}>
          <View style={styles.navBarBox}>
            {leftBtn}

            {title && (
              <View style={styles.titleWrapper}>
                <Text style={styles.titleText}>{title}</Text>
              </View>
            )}

            {rightBtn}
          </View>
        </View>
      </>
    );
  }
}

const navBarStyles = StyleSheet.create({
  navBarWrapper: {
    height: 60,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#999999',
  },
  navBarBox: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  titleWrapper: {
    flex: 1,
  },
  titleText: {
    textAlign: 'center',
    alignItems: 'center',
    fontSize: 16,
    color: '#333333',
  },
  btn: {
    color: '#fff',
    paddingLeft: 9,
    paddingRight: 9,
    fontSize: 16,
    minWidth: 50,
  },
  rightBtn: {
    color: '#108ee9',
  },
});
