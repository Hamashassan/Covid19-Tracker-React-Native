// // @flow
import {Platform, StyleSheet} from 'react-native';
import {Fonts, Colors} from '../theme';

export default StyleSheet.create({
  headerStyle: {
    elevation: 0,
    shadowOpacity: 0,
    backgroundColor: Colors.background,
  },
  headerTitleStyle: {
    fontFamily: Fonts.type.bold,
    fontSize: 22,
    // backgroundColor: 'tan',

    color: '#fff',
    // marginHorizontal: Metrics.ratio(24),
    // marginBottom: Platform.select({
    //   android: Metrics.ratio(3),
    //   ios: Metrics.ratio(0),
    // }),
  },
});
