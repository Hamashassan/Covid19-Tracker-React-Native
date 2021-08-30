import {QueryClient, QueryClientProvider} from 'react-query';
import React from 'react';

import {FilterModal, ReportCase} from './modals';
import AppNavigator from './navigator';
import {DataHandler} from './utils';
import {StatusBar} from 'react-native';
import {Colors} from './theme';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar backgroundColor={Colors.background} barStyle="light-content" />
      <AppNavigator />
      <ReportCase ref={ref => DataHandler.setReportModalRef(ref)} />
      <FilterModal ref={ref => DataHandler.setFilterModalRef(ref)} />
    </QueryClientProvider>
  );
};

export default App;
