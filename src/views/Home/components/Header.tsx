import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import logo from '../../../../assets/logo.png';
import {getHeaderData} from '../../../serivces/header';

export default function Header() {
  const [data, setData] = useState<
    {title: string; subTitle: string} | undefined
  >();

  useEffect(() => {
    const response = getHeaderData();
    setData(response);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.image} />
      <Text style={styles.title}>{data?.title}</Text>
      <Text style={styles.subtitle}>{data?.subTitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f6f6f6',
    padding: 16,
  },
  image: {
    width: 70,
    height: 28,
  },
  title: {
    marginTop: 24,
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 26,
  },
});
