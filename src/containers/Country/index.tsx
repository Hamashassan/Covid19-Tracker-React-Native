import {useQueryClient} from 'react-query';
import {ScrollView} from 'react-native';
import React, {useState} from 'react';
import moment from 'moment';

import {GlobalStats, Chart, CaseTypeSelection} from '../../components';

import styles from './styles';
import {useCountryBy, fetchStats} from '../../hooks/useCountryBy';

type Props = {
  navigation: object;
  route: object;
};

const Country: React.FC<Props> = ({navigation, route}) => {
  const country = route?.params?.data;

  navigation?.setOptions({
    title: country?.Country,
  });

  const queryClient = useQueryClient();
  const [duration, setDuration] = useState(15);

  var starting_date = new Date();
  starting_date.setDate(starting_date.getDate() - 15);

  const [startDate, setStartDate] = useState(starting_date);

  const formatedStartDate = moment(startDate).format('YYYY-MM-DD');

  const {data} = useCountryBy(country?.Slug, formatedStartDate);

  const refetch = () => {
    queryClient.prefetchQuery(
      ['byCountry'],
      fetchStats(country?.Slug, formatedStartDate),
    );
  };

  const onSelectDate = (diff: number) => {
    setDuration(diff);
    var d = new Date();
    d.setDate(d.getDate() - diff);
    setStartDate(d);

    refetch();
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainerStyle}>
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
