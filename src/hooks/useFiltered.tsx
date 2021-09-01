import {useQuery} from 'react-query';

const getFilteredData = async (text, countries) => {
  let filtered = countries.filter((item: Object) => {
    return item?.Country.includes(text);
  });
  return filtered;
};

export default function useFiltered(text, countries) {
  return useQuery(['filtered'], () => getFilteredData(text, countries));
}
