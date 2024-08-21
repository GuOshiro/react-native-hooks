import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import Producer from './Producer';
import ProducerHeader from './ProducerHeader';
import {useProducers} from '../../../hooks/useProducer';

export default function ProducerList() {
  const [title, list] = useProducers();
  return (
    <FlatList
      style={styles.container}
      data={list}
      renderItem={({item}) => <Producer {...item} />}
      ListHeaderComponent={<ProducerHeader title={title} />}
      keyExtractor={item => item.name}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginTop: 8,
  },
});
