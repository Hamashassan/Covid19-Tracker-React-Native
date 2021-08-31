import {View, TextInput, Image, TouchableOpacity} from 'react-native';
import React from 'react';

import {Images} from '../../theme';
import styles from './styles';

export type Props = {
  onFilterPress: () => void;
  onChangeText: (key: string) => void;
};

const SearchInput: React.FC<Props> = ({onFilterPress, onChangeText}) => {
  return (
    <View style={styles.container}>
      <Image source={Images.icons.search} />
      <TextInput
        onChangeText={onChangeText}
        placeholder="Search here.."
        style={styles.input}
      />
      <TouchableOpacity style={styles.filterContainer} onPress={onFilterPress}>
        <Image source={Images.icons.filterIcon} style={styles.filter} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
