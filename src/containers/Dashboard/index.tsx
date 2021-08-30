import React, {useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Modal,
  Alert,
  ActivityIndicator,
} from 'react-native';

import styles from './styles';
import {GlobalStats, CountryStats, LoaderVIew} from '../../components';
import {NavigationService, DataHandler} from '../../utils';
import ReportCase from '../../modals/ReportCase';
import {useQuery} from 'react-query';

const Dashboard = ({navigation}) => {
  navigation?.setOptions({
    headerRight: () => <HeaderRight />,
  });

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

  const TopCountries = () => {
    return (
      <View style={styles.topCountries}>
        <View style={styles.topCountriesTitleContainer}>
          <Text style={styles.topCountriesTitle}>Top Countries</Text>
          <TouchableOpacity onPress={onSeeAllPress}>
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        </View>
        {[1, 2, 3, 4, 5].map((item, index) => (
          <CountryStats key={index} />
        ))}
      </View>
    );
  };

  const renderContent = () => {
    return (
      <View style={styles.contentContainer}>
        <GlobalStats />
        <TopCountries />
      </View>
    );
  };

  const {isLoading, error, data} = useQuery('repoData', () =>
    fetch('https://api.covid19api.com/summary').then(res => res.json()),
  );

  if (isLoading) {
    return <LoaderVIew />;
  }

  if (error) return <Text>{`An error has occurred: ${error.message}`}</Text>;

  console.log('data', data);

  return (
    <>
      <ScrollView style={styles.container}>{renderContent()}</ScrollView>
    </>
  );
};

export default Dashboard;
