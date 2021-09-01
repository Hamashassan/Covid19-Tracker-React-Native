import {useQuery} from 'react-query';
import axios from 'axios';

import {BASE_URL} from '../config/Constants';

const getGlobalData = async () => {
  const {data} = await axios.get(`${BASE_URL}/summary`);
  console.log('GlobalData ==> ', data);
  return data;
};

export default function useGlobal() {
  return useQuery(['global'], () => getGlobalData());
}
