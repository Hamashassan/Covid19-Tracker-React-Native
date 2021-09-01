import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

import {NavigationService, Util} from '../../utils';

import styles from './styles';

export type Props = {
  data: Country;
};

const CountryStats: React.FC<Props> = ({data}) => {
  const {CountryCode, Country, TotalConfirmed, TotalDeaths} = data;

  const renderFlag = () => (
    <Image
      style={styles.flag}
      source={{uri: `https://www.countryflags.io/${CountryCode}/shiny/64.png`}}
    />
  );

  const renderLeftDetail = () => {
    return (
      <View style={styles.leftContainer}>
        <Text style={styles.country}>{Country}</Text>
        <Text style={styles.totalCases}>
          {Util.numberWithCommas(TotalConfirmed)}
        </Text>
      </View>
    );
  };

  const renderRightDetail = () => {
    return (
      <View style={styles.rightContainer}>
        <Text style={styles.totalCases}>
          {Util.numberWithCommas(TotalDeaths)}
        </Text>
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
      onPress={() => NavigationService.navigate('Country', {data})}
      style={styles.container}>
      {renderFlag()}
      {renderDetails()}
    </TouchableOpacity>
  );
};

export default CountryStats;
