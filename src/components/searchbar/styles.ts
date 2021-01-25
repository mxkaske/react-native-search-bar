import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'black',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
    padding: 8,
    borderRadius: 8,
  },
  searchIconContainer: {
    paddingRight: 8,
  },
  clearIconContainer: {
    paddingLeft: 8,
  },
  input: {
    flex: 1,
    height: 28,
  },
});
