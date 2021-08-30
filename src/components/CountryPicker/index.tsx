import CountryPicker, {DARK_THEME} from 'react-native-country-picker-modal';
import React, {useState} from 'react';

import styles from './styles';

const CountryPickerInput = ({onSelectCountry}) => {
  const [countryCode, setCountryCode] = useState<CountryCode>('AE');

  const onSelect = (country: Country) => {
    setCountryCode(country.cca2);
    onSelectCountry(country);
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
