import React, {forwardRef, useImperativeHandle, useRef, useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {Modalize} from 'react-native-modalize';
import {screenHeight} from '../../config/Constants';
import styles from './styles';
import {CountryPicker, CaseTypeSelection, ModalHeader} from '../../components';

const ReportCase = forwardRef(({}, ref) => {
  const modalizeRef = useRef<Modalize>(null);
  const [caseType, setCaseType] = useState(null);

  const onSubmitPress = () => {};

  const onSelectCase = c => {
    setCaseType(c);
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
        <CountryPicker />
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
