import create from 'zustand';
import {Util} from '../utils';

export const useStore = create(set => ({
  summary: {},
  setSummary: data => set(state => ({summary: {...state.summary, data}})),
  reportCase: data => {
    const {country, caseType, cb} = data;

    const type = Util.getFilterValue(caseType);

    set(state => {
      const countries = state.summary.data.Countries;

      const global = state.summary.data.Global;

      const filteredCountry = countries.filter(
        item => item.CountryCode === country,
      )[0];

      const updatedCountry = {
        ...filteredCountry,
        [type]: filteredCountry[type] + 1,
      };

      const index = countries.findIndex(item => item.CountryCode === country);

      countries[index] = updatedCountry;
      global[type] = global[type] + 1;

      cb();

      return {
        summary: {
          ...state.summary,
          data: {
            ...state.summary.data,
            Countries: [...state.summary.data.Countries],
          },
        },
      };
    });
  },
}));
