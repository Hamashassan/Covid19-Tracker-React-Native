import React, {useState} from 'react';
import {View, Text} from 'react-native';
import CountryPicker, {DARK_THEME} from 'react-native-country-picker-modal';
import {screenWidth} from '../../config/Constants';
import styles from './styles';

const CountryPickerInput = () => {
  const [countryCode, setCountryCode] = useState<CountryCode>('AE');
  const [country, setCountry] = useState<Country>(null);
  const onSelect = (country: Country) => {
    setCountryCode(country.cca2);
    setCountry(country);
  };

  return (
    <CountryPicker
      theme={DARK_THEME}
      containerButtonStyle={styles.container}
      withFlag={true}
      withEmoji={true}
      withFilter={true}
      withAlphaFilter={false}
      withCallingCode={false}
      onSelect={onSelect}
      withCountryNameButton={true}
      countryCode={countryCode}
    />
  );
};

export default CountryPickerInput;
