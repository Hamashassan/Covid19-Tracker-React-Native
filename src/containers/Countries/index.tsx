import React from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './styles';
import {SearchInput, CountryStats} from '../../components';
import {DataHandler} from '../../utils';

const Countries = () => {
  const onFilterPress = () => {
    DataHandler.getFilterModalRef().open();
  };

  return (
    <View style={styles.container}>
      <SearchInput onFilterPress={onFilterPress} />
      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.list}
        data={[1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5]}
        renderItem={() => <CountryStats />}
      />
    </View>
  );
};

export default Countries;
