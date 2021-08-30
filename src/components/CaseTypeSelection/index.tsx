import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import React from 'react';

const defaultData = ['Active', 'Death', 'Recovery'];

const CaseTypeSelection = ({
  onSelect,
  selected,
  data = defaultData,
  postfix,
}) => {
  return (
    <View style={styles.container}>
      {data.map(item => {
        const style = selected === item ? {borderColor: '#f7f9ff'} : {};
        return (
          <TouchableOpacity
            onPress={() => onSelect(item)}
            style={[styles.btnContainer, style]}>
            <Text style={styles.text}>
              {item}
              {postfix && postfix}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CaseTypeSelection;
