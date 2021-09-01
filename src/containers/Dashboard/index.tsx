import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';

import {
  GlobalStats,
  CountryStats,
  LoaderVIew,
  ErrorView,
} from '../../components';
import {NavigationService, DataHandler, Util} from '../../utils';
import {useStore} from '../../store/index';
import styles from './styles';
import useGlobal from '../../hooks/useGlobal';

const Dashboard = ({navigation}) => {
  useEffect(() => {
    navigation?.setOptions({
      headerRight: () => <HeaderRight />,
    });
  }, []);

  const {data, error, isLoading} = useGlobal();
  const setSummary = useStore(state => state.setSummary);
  setSummary(data);

  const Global = useStore(state => state?.summary?.Global);
  const Countries = useStore(state => state?.summary?.Countries);

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
    return (
      <View style={styles.contentContainer}>
        <GlobalStats data={Global} />
        <TopCountries data={Countries} />
      </View>
    );
  };

  if (isLoading) {
    return <LoaderVIew />;
  }

  if (error) {
    return <ErrorView message={error?.message} />;
  }

  return (
    <ScrollView
      contentContainerStyle={styles.contentContainerStyle}
      style={styles.container}>
      {renderContent()}
    </ScrollView>
  );
};

export default Dashboard;
