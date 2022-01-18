import {StyleSheet} from 'react-native';
import {ColourPalette} from '../../assets/styles/ColourPalette';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginVertical: 5,
    backgroundColor: ColourPalette.lightGrey,
    borderRadius: 5,
    height: 150,
  },
  avatarView: {
    margin: 20,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  upperView: {
    flex: 1.5,
  },
  drugDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  lowerView: {
    flex: 1,
  },
  name: {
    color: 'black',
    fontSize: 18,
    fontFamily: 'Avenir Next',
    fontWeight: '600',
    paddingLeft: 10,
    paddingTop: 5
  },
  date: {
    color: 'black',
    fontSize: 16,
    fontFamily: 'Avenir Next',
    fontWeight: '600',
    right: 10,
    paddingTop: 5
  },
  disease: {
    color: 'black',
    fontSize: 13,
    fontFamily: 'Avenir Next',
    fontWeight: '600',
    paddingLeft: 10,
    paddingTop: 3
  },
  description: {
    color: 'black',
    fontSize: 12,
    padding: 10,
    fontFamily: 'Avenir Next',
    fontWeight: '400',
  }
});