import React, {forwardRef, useImperativeHandle, useRef, useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {Modalize} from 'react-native-modalize';

import {CountryPicker, CaseTypeSelection, ModalHeader} from '../../components';
import {useStore} from '../../store';
import styles from './styles';

const ReportCase = forwardRef(({}, ref) => {
  const modalizeRef = useRef<Modalize>(null);
  const [caseType, setCaseType] = useState('Active');
  const [country, setCountry] = useState('AE');

  const reportCase = useStore(state => state.reportCase);

  const onSubmitPress = () => {
    reportCase({caseType, country, cb: closeModal});
  };

  const onSelectCase = c => {
    setCaseType(c);
  };

  const onSelectCountry = ({cca2}) => {
    setCountry(cca2);
  };

  const openModal = () => {
    modalizeRef.current?.open();
  };
  const closeModal = () => {
    modalizeRef.current?.close();
  };

  useImperativeHandle(ref, () => ({
    open: openModal,
    close: closeModal,
  }));

  const renderCountryPicker = () => {
    return (
      <View style={styles.countryPickerContainer}>
        <Text style={styles.subTitle}>Select Country</Text>
        <CountryPicker onSelectCountry={onSelectCountry} />
      </View>
    );
  };

  const renderCaseType = () => {
    return (
      <View style={styles.countryPickerContainer}>
        <Text style={styles.subTitle}>Select Case Type</Text>
        <CaseTypeSelection onSelect={onSelectCase} selected={caseType} />
      </View>
    );
  };

  const renderHeader = () => {
    return <ModalHeader title="Report Case" onPress={closeModal} />;
  };

  const renderButton = () => {
    return (
      <TouchableOpacity onPress={onSubmitPress} style={styles.submitBtn}>
        <Text style={styles.btnText}>Submit</Text>
      </TouchableOpacity>
    );
  };

  const renderContent = () => {
    return (
      <View>
        {renderHeader()}
        {renderCountryPicker()}
        {renderCaseType()}
        {renderButton()}
      </View>
    );
  };

  return (
    <Modalize
      scrollViewProps={{
        showsVerticalScrollIndicator: false,
        scrollEnabled: false,
      }}
      adjustToContentHeight
      withHandle={false}
      modalStyle={styles.modalStyle}
      ref={modalizeRef}>
      {renderContent()}
    </Modalize>
  );
});

export default ReportCase;
