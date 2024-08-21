import React from 'react';
import {StyleSheet, View} from 'react-native';
import Header from './components/Header';
import ProducersList from './components/ProducerList';

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <ProducersList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
