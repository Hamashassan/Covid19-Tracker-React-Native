import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#EAEAEA',
    paddingLeft: 20,
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontSize: 16,
    padding: 0,
    paddingVertical: 15,
    flex: 1,
    marginHorizontal: 10,
  },
  filterContainer: {
    paddingRight: 20,
    paddingLeft: 10,
    paddingVertical: 13,
  },
  filter: {
    tintColor: 'gray',
  },
});
