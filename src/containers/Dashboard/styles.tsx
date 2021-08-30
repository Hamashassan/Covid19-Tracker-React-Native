import {StyleSheet} from 'react-native';
import {Fonts, Colors} from '../../theme';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: Colors.background,
    paddingTop: 20,
  },
  contentContainer: {},
  date: {
    color: Colors.white,
  },
  title: {
    color: Colors.white,
    fontSize: 16,
    fontFamily: Fonts.type.bold,
    marginTop: 10,
    marginBottom: 7,
  },
  count: {
    fontSize: 30,
    fontFamily: Fonts.type.bold,
    color: Colors.red,
  },
  topCountries: {
    marginTop: 20,
  },
  topCountriesTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  topCountriesTitle: {
    flex: 1,
    color: Colors.white,
    fontSize: 20,
    fontFamily: Fonts.type.bold,
  },
  seeAll: {
    paddingVertical: 5,
    paddingLeft: 20,
    color: Colors.white,
  },
  addBtn: {fontSize: 30, color: '#fff'},
  addBtnContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
