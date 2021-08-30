import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import {NavigationService} from '../../utils';

const CountryStats = () => {
  const renderFlag = () => (
    <Image
      style={styles.flag}
      source={{uri: 'https://www.countryflags.io/us/shiny/64.png'}}
    />
  );

  const renderLeftDetail = () => {
    return (
      <View style={styles.leftContainer}>
        <Text style={styles.country}>USA</Text>
        <Text style={styles.totalCases}>74,143,201</Text>
      </View>
    );
  };

  const renderRightDetail = () => {
    return (
      <View style={styles.rightContainer}>
        <Text style={styles.totalCases}>74,143,201</Text>
      </View>
    );
  };

  const renderDetails = () => {
    return (
      <View style={styles.detailsContainer}>
        {renderLeftDetail()}
        {renderRightDetail()}
      </View>
    );
  };

  return (
    <TouchableOpacity
      onPress={() => NavigationService.navigate('Country')}
      style={styles.container}>
      {renderFlag()}
      {renderDetails()}
    </TouchableOpacity>
  );
};

export default CountryStats;
