import React from 'react';
import {StyleSheet, Text} from 'react-native';
export default function ProducerHeader({title}: {title?: string}) {
  return <Text style={styles.title}>{title}</Text>;
}
const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'medium',
    marginVertical: 8,
  },
});
