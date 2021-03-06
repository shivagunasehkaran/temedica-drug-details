import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  logoView: {
    alignItems: 'center'
  },
  logo: {
    height: 50, 
    width: 50, 
    resizeMode : 'stretch', 
    margin: 5 
  },
  stateText: {
    marginLeft: 20,
  },
  flatListView: {
    marginVertical: 10,
    marginHorizontal: 14,
  },
  titleText: {
    marginHorizontal: 20,
  },
  renderItem: {
    flex: 1,
    height: 100,
    margin: 5,
  },
  loader: {
    marginTop: 10,
    alignItems: 'center',
  },
});
