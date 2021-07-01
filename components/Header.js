import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Colors from '../constants/colors';

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
      <Image source={require('../assets/images/imagesdina.jpg')} style={styles.image} />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  headerTitle: {
    fontSize: 22,
    fontFamily: 'open-sans-bold',
  },
  image: {
    width: 20,
    height: 20,
  }
});

export default Header;