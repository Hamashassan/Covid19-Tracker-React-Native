import {StyleSheet} from 'react-native';
import {Fonts} from '../../theme';

export default StyleSheet.create({
  chart: {
    // paddingHorizontal: 10,
    marginVertical: 10,
    borderRadius: 16,
    backgroundColor: '#1d212f',
  },
  titleContainer: {
    marginTop: 10,
    flexDirection: 'row',
  },
  title: {
    flex: 1,
    color: '#fff',
    fontSize: 20,
    fontFamily: Fonts.type.bold,
  },
});
