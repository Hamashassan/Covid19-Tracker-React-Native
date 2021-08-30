import {Colors, Fonts} from '../../theme';
import {StyleSheet} from 'react-native';

// import {StyleSheet} from 'react-native';
// import {Fonts} from '../../theme';

// export default StyleSheet.create({
//   container: {
//     backgroundColor: '#1d212f',
//     padding: 10,
//     paddingTop: 20,
//     borderRadius: 10,
//   },
//   title: {
//     color: '#fff',
//     fontSize: 25,
//     fontFamily: Fonts.type.bold,
//     // textAlign: 'center',
//     marginBottom: 10,
//   },
//   statsContainer: {
//     backgroundColor: '#171a26',

//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     paddingVertical: 10,
//     borderRadius: 10,
//   },
//   statsTitle: {
//     color: 'orange',
//     fontFamily: Fonts.type.bold,
//     textAlign: 'center',
//   },
//   statsCount: {
//     color: '#fff',
//     fontFamily: Fonts.type.italic,
//     textAlign: 'center',
//     marginTop: 10,
//     fontSize: 20,
//   },
// });

export default StyleSheet.create({
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

  statsContainer: {
    flexDirection: 'row',
    marginTop: 15,
  },
  stats: (title: string) => ({
    backgroundColor: title === 'Deaths' ? '#DC3545' : '#28A745',
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 10,
  }),
  statsTitle: {
    color: Colors.white,
    fontSize: 16,
    fontFamily: Fonts.type.bold,
  },
  statsCount: {
    marginTop: 5,
    color: Colors.white,
    fontSize: 18,
    fontFamily: Fonts.type.bold,
  },
  seperator: {width: 20},
});
