import {StyleSheet} from 'react-native';
import {Fonts} from '../../theme';

export default StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
  },
  title: {
    color: '#fff',
    fontFamily: Fonts.type.bold,
    fontSize: 25,
    flex: 1,
  },
  crossContainer: {
    paddingHorizontal: 10,
  },
  cross: {
    color: '#fff',
    fontSize: 25,
    transform: [{rotate: '45deg'}],
  },
});
