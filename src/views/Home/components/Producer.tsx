import React, {useMemo, useReducer, useState} from 'react';
import {
  Image,
  ImageProps,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Ranking from './Ranking';

export default function Producer({
  image,
  name,
  ranking,
  distance,
}: {
  image: ImageProps;
  name: string;
  ranking: number;
  distance: number;
}) {
  const [rankingSize, changeRankingSize] = useReducer(
    (state: 'small' | 'large') => (state === 'small' ? 'large' : 'small'),
    'small',
  );
  const distanceLabel = useMemo(() => `${distance}m`, [distance]);
  return (
    <TouchableOpacity onPress={changeRankingSize} style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.content}>
        <View>
          <Text style={styles.title}>{name}</Text>
          <Ranking
            ranking={ranking}
            size={rankingSize}
            isEditable={rankingSize === 'large'}
          />
        </View>
        <Text style={styles.subtitle}>{distanceLabel}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 6,
    backgroundColor: '#f6f6f6',
    margin: 8,
    flexDirection: 'row',
    gap: 16,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
    marginRight: 16,
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 6,
    marginVertical: 16,
    marginLeft: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 12,
  },
});
