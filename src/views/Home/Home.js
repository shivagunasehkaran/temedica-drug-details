import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Keyboard,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import DrugDetails from '../../components/DrugDetails';
import InputText from '../../components/InputText';
import drugsData from '../../dbstore/drugs.json';
import { styles } from './Home.style';

const Home = () => {
  const [keyword, setKeyword] = useState('');
  const [searchResultCount, setSearchResultCount] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);
  const [isClearButtonShown, setClearButtonShown] = useState(false);

  useEffect(() => {
      //set search data
      setMasterDataSource(drugsData.drugs);
      setFilteredDataSource(drugsData.drugs);
  }, []);

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource and update FilteredDataSource
      const newData = masterDataSource.filter((item) => {
        // Applying filter for the inserted text in search bar
        const itemData = item.name
        ? item.name.toUpperCase()
        : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });

      //set search details
      setSearchDetails(newData, text, `showing ${newData.length} results`);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setSearchDetails(masterDataSource, text, '');
    }
  };

  // method to set search details & to manage duplicate codes
  const setSearchDetails = (filteredData, keyword, searchCount) => {
    setFilteredDataSource(filteredData);
    setKeyword(keyword);
    setSearchResultCount(searchCount);
  };

  // on focus listener
  const onInputFocusHandler = () => {
    // flag for clear button
    setClearButtonShown(true);
  };

  // clear text input
  const handleTextInputClear = () => {
    // clear all values when press clear button
    setSearchDetails(drugsData.drugs, '', '');
  };

  // calling api for on submit (keyboard)
  const onSubmitHandler = () => {
    Keyboard.dismiss();
  };

  // child render item
  const childListRenderItem = ({item}) => (
    <DrugDetails
      item={item}
    />
  );

  // child KeyExtractor
  const childListKeyExtractor = (item) => {item.id.toString()}
    
  return (
      <SafeAreaView>
        <InputText
          value={keyword}
          onChangeHandler={val => searchFilterFunction(val)}
          onFocus={onInputFocusHandler}
          isClearButtonShown={isClearButtonShown}
          onClear={handleTextInputClear}
          onSubmit={onSubmitHandler}
        />
        <Text style={styles.stateText}>{searchResultCount}</Text>
        <View style={styles.flatListView}>
          <FlatList
            data={filteredDataSource}
            renderItem={childListRenderItem}
            keyExtractor={childListKeyExtractor}
          />
        </View>
      </SafeAreaView>
  );
};

export default Home;
