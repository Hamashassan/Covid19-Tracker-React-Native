import create from 'zustand';
import {Util} from '../utils';

interface StoreState {
  summary: {};
  setSummary: (data: Summary) => void;
  reportCase: (data: {
    country: string;
    caseType: string;
    cb: () => void;
  }) => void;
}

export const useStore = create<StoreState>(set => ({
  summary: {},
  setSummary: data => set(state => ({summary: {...state.summary, ...data}})),
  reportCase: data => {
    const {country, caseType, cb} = data;

    const type = Util.getFilterValue(caseType);

    set(state => {
      const countries = state?.summary?.Countries;

      const global = state?.summary?.Global;

      const filteredCountry = countries.filter(
        (item: Country) => item.CountryCode === country,
      )[0];

      const updatedCountry = {
        ...filteredCountry,
        [type]: filteredCountry[type] + 1,
      };

      const index = countries.findIndex(
        (item: Country) => item.CountryCode === country,
      );

      countries[index] = updatedCountry;
      global[type] = global[type] + 1;

      cb();

      return {
        summary: {
          ...state.summary,
          Countries: [...state.summary.Countries],
        },
      };
    });
  },
}));
