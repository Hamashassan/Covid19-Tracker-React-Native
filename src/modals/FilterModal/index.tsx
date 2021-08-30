import React, {forwardRef, useImperativeHandle, useRef, useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {Modalize} from 'react-native-modalize';
import {screenHeight} from '../../config/Constants';
import styles from './styles';
import {ModalHeader, CaseTypeSelection} from '../../components';

const FilterModal = forwardRef(({}, ref) => {
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
    setCaseType(null);
    modalizeRef.current?.close();
  };

  useImperativeHandle(ref, () => ({
    open: openModal,
    close: closeModal,
  }));

  const renderHeader = () => {
    return <ModalHeader title="Filters" onPress={closeModal} />;
  };

  const renderCaseType = () => {
    return (
      <View style={styles.caseTypeContainer}>
        <Text style={styles.subTitle}>Sort by number of recovered cases</Text>
        <CaseTypeSelection onSelect={onSelectCase} selected={caseType} />
      </View>
    );
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

export default FilterModal;
