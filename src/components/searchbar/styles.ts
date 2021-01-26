import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'black',
    flexDirection: 'row',
  },
  inputContainer: {
    flex: 1,
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
    marginLeft: 8,
  },
  cancelButtonContainer: {
    position: 'absolute',
    right: 16,
    top: 0,
    bottom: 0,
    padding: 8,
    justifyContent: 'center',
  },
  cancelButtonText: {
    color: 'white',
  },
  input: {
    flex: 1,
    height: 28,
  },
});
