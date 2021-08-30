import React from 'react';
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import {Images} from '../../theme';

const SearchInput = ({onFilterPress}) => {
  return (
    <View style={styles.container}>
      <Image source={Images.icons.search} />
      <TextInput placeholder="Search here.." style={styles.input} />
      <TouchableOpacity onPress={onFilterPress}>
        <Image source={Images.icons.filterIcon} style={styles.filter} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
