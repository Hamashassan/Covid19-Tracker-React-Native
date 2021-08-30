import React from 'react';
import {View, Text} from 'react-native';
import AppNavigator from './navigator';

import {DataHandler} from './utils';
import {FilterModal, ReportCase} from './modals';

const App = () => {
  return (
    <>
      <AppNavigator />
      <ReportCase ref={ref => DataHandler.setReportModalRef(ref)} />
      <FilterModal ref={ref => DataHandler.setFilterModalRef(ref)} />
    </>
  );
};

export default App;
