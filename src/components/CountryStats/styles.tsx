import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../theme';

export default StyleSheet.create({
  container: {
    backgroundColor: '#EAEAEA',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 15,
  },
  flag: {
    width: 50,
    height: 50,
  },
  leftContainer: {
    marginLeft: 15,
    flex: 1,
  },
  rightContainer: {
    justifyContent: 'flex-end',
  },
  country: {
    fontFamily: Fonts.type.bold,
  },
  totalCases: {
    color: 'red',

    fontFamily: Fonts.type.bold,
  },
  detailsContainer: {
    flex: 1,
    flexDirection: 'row',
  },
});
