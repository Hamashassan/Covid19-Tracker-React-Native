import React, {useRef} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Modal,
  Alert,
} from 'react-native';

import styles from './styles';
import {GlobalStats, CountryStats} from '../../components';
import {NavigationService, DataHandler} from '../../utils';
import ReportCase from '../../modals/ReportCase';

const Dashboard = ({navigation}) => {
  const modalRef = useRef<Modal>(null);

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

  return (
    <>
      <ScrollView style={styles.container}>{renderContent()}</ScrollView>
    </>
  );
};

export default Dashboard;
