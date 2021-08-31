import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

export type Props = {
  title: string;
  onPress: () => void;
};

const ModalHeader: React.FC<Props> = ({title, onPress}) => {
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
