import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import styles from './styles';

const LoaderVIew = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator />
    </View>
  );
};

export default LoaderVIew;
