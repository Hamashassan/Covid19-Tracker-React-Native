import {View, FlatList} from 'react-native';
import React, {useState} from 'react';

import {SearchInput, CountryStats} from '../../components';
import {DataHandler, Util} from '../../utils';
import {useStore} from '../../store/index';
import styles from './styles';

const Countries = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [filteredBy, setfilteredBy] = useState(null);
  const [searchText, setSearchText] = useState('');

  const countries = useStore(state => state.summary.Countries);

  const onSelectFilter = val => {
    setSearchText('');
    setfilteredBy(Util.getFilterValue(val));
  };

  const onFilterPress = () => {
    DataHandler.getFilterModalRef().open(onSelectFilter);
  };

  const onSearchText = (text: string) => {
    setSearchText(text);
    let filtered = countries.filter((item: Object) => {
      return item?.Country.includes(searchText);
    });
    text !== '' ? setFilteredData(filtered) : setFilteredData([]);
  };

  const data =
    filteredData.length > 0
      ? filteredData
      : filteredBy !== ''
      ? Util.filterDataBy(countries, filteredBy)
      : countries;

  return (
    <View style={styles.container}>
      <SearchInput onChangeText={onSearchText} onFilterPress={onFilterPress} />
      <FlatList
        data={data}
        style={styles.list}
        extraData={filteredData}
        onEndReachedThreshold={0}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item}) => <CountryStats data={item} />}
      />
    </View>
  );
};

export default Countries;
