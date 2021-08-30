import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const ModalHeader = ({title, onPress}) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={onPress} style={styles.crossContainer}>
        <Text style={styles.cross}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ModalHeader;
