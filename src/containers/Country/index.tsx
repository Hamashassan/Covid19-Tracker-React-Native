import {useQuery, useQueryClient} from 'react-query';
import {ScrollView} from 'react-native';
import React, {useState} from 'react';
import moment from 'moment';

import {GlobalStats, Chart, CaseTypeSelection} from '../../components';
import {BASE_URL} from '../../config/Constants';
import styles from './styles';

const Country = ({navigation, route}) => {
  const queryClient = useQueryClient();

  const country = route?.params?.data;
  const [duration, setDuration] = useState(15);
  var d = new Date();
  d.setDate(d.getDate() - 15);
  const [startDate, setStartDate] = useState(d);

  navigation?.setOptions({
    title: country?.Country,
  });

  const formatedStartDate = moment(startDate).format('YYYY-MM-DD');

  async function fetchStats() {
    return fetch(
      `${BASE_URL}/total/country/${country?.Slug}/status/confirmed?from=${formatedStartDate}T00:00:00Z&to=2021-08-30T00:00:00Z`,
    ).then(res => res.json());
  }

  const onSelectDate = c => {
    setDuration(c);
    var d = new Date();
    d.setDate(d.getDate() - c);
    setStartDate(d);
    queryClient.prefetchQuery(['byCountry'], fetchStats);
  };

  const {data} = useQuery('byCountry', fetchStats);

  return (
    <ScrollView style={styles.container}>
      <GlobalStats data={country} />
      <Chart data={data} />
      <CaseTypeSelection
        data={[7, 15, 30]}
        onSelect={onSelectDate}
        selected={duration}
        postfix={' days'}
      />
    </ScrollView>
  );
};

export default Country;
