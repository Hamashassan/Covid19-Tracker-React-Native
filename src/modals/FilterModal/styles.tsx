import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../theme';

export default StyleSheet.create({
  modalStyle: {
    backgroundColor: Colors.background,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 1,
    shadowRadius: 12.35,
    paddingVertical: 20,
    elevation: 19,
    paddingHorizontal: 20,
  },
  title: {
    color: '#fff',
    fontFamily: Fonts.type.bold,
    fontSize: 25,
  },

  caseTypeContainer: {
    marginTop: 20,
  },

  subTitle: {
    color: '#fff',
    fontFamily: Fonts.type.bold,
    fontSize: 18,
    marginBottom: 10,
  },
  submitBtn: {
    backgroundColor: '#272b3b',
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 10,
    marginVertical: 20,
  },
  btnText: {
    color: '#fff',
    fontFamily: Fonts.type.regular,
  },
});
