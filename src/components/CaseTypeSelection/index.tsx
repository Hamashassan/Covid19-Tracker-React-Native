import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import React from 'react';

const defaultData: string[] | number[] = ['Active', 'Death', 'Recovery'];

export type Props = {
  onSelect: (key: string | number) => void;
  selected?: string | number;
  data?: string[] | number[];
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
      {data.map((item: string, index: number) => {
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
