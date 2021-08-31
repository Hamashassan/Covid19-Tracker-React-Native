import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import React from 'react';

const defaultData = ['Active', 'Death', 'Recovery'];

export type Props = {
  onSelect: (key: string) => void;
  selected?: string | number;
  data: string[] | number[];
  postfix?: string;
};

const CaseTypeSelection: React.FC<Props> = ({
  onSelect,
  selected,
  data = defaultData,
  postfix,
}) => {
  return (
    <View style={styles.container}>
      {data.map((item, index) => {
        const style = selected === item ? {borderColor: '#f7f9ff'} : {};
        return (
          <TouchableOpacity
            key={index}
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
