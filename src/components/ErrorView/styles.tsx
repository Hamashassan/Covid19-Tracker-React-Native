import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorImage: {
    width: 200,
    height: 200,
  },
  message: {
    color: Colors.white,
    fontSize: 20,
    fontFamily: Fonts.type.bold,
    marginBottom: 50,
  },
});
