import React from 'react';
import {View, Text} from 'react-native';
import {GlobalStats, Chart} from '../../components';
import styles from './styles';

const Country = () => {
  return (
    <View style={styles.container}>
      <GlobalStats />
      <Chart />
    </View>
  );
};

export default Country;
