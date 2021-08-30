import React, {forwardRef, useImperativeHandle, useRef} from 'react';
import {Text, View} from 'react-native';
import {Modalize} from 'react-native-modalize';
import {screenHeight} from '../../config/Constants';
import styles from './styles';

const FilterModal = forwardRef(({}, ref) => {
  const modalizeRef = useRef<Modalize>(null);

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

  const renderContent = () => {
    return (
      <View>
        <Text style={styles.title}>Filters</Text>
      </View>
    );
  };

  return (
    <Modalize
      scrollViewProps={{
        showsVerticalScrollIndicator: false,
        scrollEnabled: false,
      }}
      modalHeight={screenHeight / 1.5}
      withHandle={false}
      modalStyle={styles.modalStyle}
      ref={modalizeRef}>
      {renderContent()}
    </Modalize>
  );
});

export default FilterModal;
