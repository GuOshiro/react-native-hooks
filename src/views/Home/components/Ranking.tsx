import React, {useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import star from '../../../../assets/estrela.png';
import starDisabled from '../../../../assets/estrelaCinza.png';

export default function Ranking({
  ranking,
  isEditable,
  size = 'small',
}: {
  ranking: number;
  isEditable?: boolean;
  size?: 'small' | 'large';
}) {
  const [newRanking, setNewRanking] = useState(ranking);
  const styles = styling(size);
  return (
    <View style={styles.container}>
      {[...Array(5).keys()].map(index => (
        <TouchableOpacity
          key={index}
          disabled={!isEditable}
          onPress={() => setNewRanking(index + 1)}>
          <Image
            source={newRanking - 1 < index ? starDisabled : star}
            style={styles.star}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styling = (size?: 'small' | 'large') =>
  StyleSheet.create({
    star: {
      width: size === 'large' ? 36 : 12,
      height: size === 'large' ? 36 : 12,
    },
    container: {
      flexDirection: 'row',
    },
  });
