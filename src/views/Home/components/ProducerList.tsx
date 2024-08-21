import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';
import {getProducts} from '../../../serivces/products';
import products from '../../../mocks/products';
import Producer from './Producer';
import ProducerHeader from './ProducerHeader';

export default function ProducerList() {
  const [data, setData] = useState<typeof products>();

  useEffect(() => {
    const response = getProducts();
    setData(response);
  }, []);

  return (
    <FlatList
      style={styles.container}
      data={data?.list}
      renderItem={({item}) => <Producer {...item} />}
      ListHeaderComponent={<ProducerHeader title={data?.title} />}
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
