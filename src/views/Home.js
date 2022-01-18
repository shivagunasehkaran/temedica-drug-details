import React, {useState, useEffect} from 'react';
import {SafeAreaView, Keyboard, View, FlatList} from 'react-native';
import DrugDetails from '../components/DrugDetails/DrugDetails';
import InputText from '../components/InputText';
import drugsData from '../dbstore/drugs.json';
import { styles } from './Home.style';

const Home = () => {
  const [keyword, setKeyword] = useState('');
  const [isClearButtonShown, setClearButtonShown] = useState(false);
  const [masterDataSource, setMasterDataSource] = useState([]);

  useEffect(() => {
    //set search data
    setMasterDataSource(drugsData.drugs);
}, []);

  const searchFilterFunction = (text) => {
    setKeyword(text);
  };

  // on focus listener
  const onInputFocusHandler = () => {
    // flag for clear button
    setClearButtonShown(true);
  };

  // clear text input
  const handleTextInputClear = () => {
    setKeyword('');
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
      <View style={styles.flatListView}>
        <FlatList
          data={masterDataSource}
          renderItem={childListRenderItem}
          keyExtractor={childListKeyExtractor}
        />
      </View>
    </SafeAreaView>
);
};

export default Home;