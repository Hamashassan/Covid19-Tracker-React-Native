import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const CaseTypeSelection = ({onSelect, selected}) => {
  return (
    <View style={styles.container}>
      {['Active', 'Death', 'Recovery'].map(item => {
        const style = selected === item ? {borderColor: '#f7f9ff'} : {};
        return (
          <TouchableOpacity
            onPress={() => onSelect(item)}
            style={[styles.btnContainer, style]}>
            <Text style={styles.text}>{item}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CaseTypeSelection;
