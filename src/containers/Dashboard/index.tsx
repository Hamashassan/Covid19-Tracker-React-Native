import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {useQuery} from 'react-query';
import React from 'react';

import {GlobalStats, CountryStats, LoaderVIew} from '../../components';
import {NavigationService, DataHandler, Util} from '../../utils';
import {useStore} from '../../store/index';
import styles from './styles';

const Dashboard = ({navigation}) => {
  navigation?.setOptions({
    headerRight: () => <HeaderRight />,
  });

  const Global = useStore(state => state?.summary?.data?.Global);
  const Countries = useStore(state => state?.summary?.data?.Countries);

  const onSeeAllPress = () => {
    NavigationService.navigate('Countries');
  };

  const onOpen = () => {
    DataHandler.getReportModalRef().open();
  };

  const HeaderRight = () => {
    return (
      <TouchableOpacity onPress={onOpen} style={styles.addBtnContainer}>
        <Text style={styles.addBtn}>+</Text>
      </TouchableOpacity>
    );
  };

  const TopCountries = ({data}) => {
    const topCountries = Util.getTopCountries(data);
    return (
      <View style={styles.topCountries}>
        <View style={styles.topCountriesTitleContainer}>
          <Text style={styles.topCountriesTitle}>Top Countries</Text>
          <TouchableOpacity onPress={onSeeAllPress}>
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        </View>
        {topCountries.map((item, index) => (
          <CountryStats data={item} key={index} />
        ))}
      </View>
    );
  };

  const renderContent = () => {
    // const Countries = useStore(state => state?.summary?.data?.Countries);

    return (
      <View style={styles.contentContainer}>
        <GlobalStats data={Global} />
        <TopCountries data={Countries} />
      </View>
    );
  };

  const {isLoading, error, data} = useQuery('repoData', () =>
    fetch('https://api.covid19api.com/summary').then(res => res.json()),
  );

  console.log('data', data);

  const setSummary = useStore(state => state.setSummary);
  setSummary(data);

  if (isLoading) {
    return <LoaderVIew />;
  }

  if (error) return <Text>{`An error has occurred: ${error.message}`}</Text>;

  return (
    <ScrollView
      contentContainerStyle={styles.contentContainerStyle}
      style={styles.container}>
      {renderContent()}
    </ScrollView>
  );
};

export default Dashboard;
