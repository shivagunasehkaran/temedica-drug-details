import React, {useState} from 'react';
import {SafeAreaView, Keyboard} from 'react-native';
import InputText from '../components/InputText';

const Home = () => {
  const [keyword, setKeyword] = useState('');
  const [isClearButtonShown, setClearButtonShown] = useState(false);

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
      </SafeAreaView>
  );
};

export default Home;