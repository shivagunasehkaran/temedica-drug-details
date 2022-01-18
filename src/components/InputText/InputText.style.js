import {StyleSheet} from 'react-native';
import { ColourPalette } from '../../assets/styles/ColourPalette';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  inputContainer: {
    flex: 4,
    height: 45,
    backgroundColor: ColourPalette.lightGrey,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
    borderRadius: 8,
    borderWidth: 0.1,
    paddingLeft: 15
  },
  searchIcon: {
    marginLeft: 10,
    width: 35,
    height: 35
  },
  clearIcon: {
    width: 20,
    height: 20,
    position: 'absolute',
    right: 10,
  },
  cancel: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
