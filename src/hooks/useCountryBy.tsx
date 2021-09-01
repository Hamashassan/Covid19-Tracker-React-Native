import {useQuery} from 'react-query';
import axios from 'axios';

import {BASE_URL} from '../config/Constants';

export const fetchStats = async (country: string, date: string) => {
  const {data} = await axios.get(
    `${BASE_URL}/total/country/${country}/status/confirmed?from=${date}T00:00:00Z&to=2021-08-30T00:00:00Z`,
  );
  return data;
};

export function useCountryBy(country: string, date: string) {
  return useQuery(['byCountry'], () => fetchStats(country, date));
}
