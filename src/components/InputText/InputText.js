import React from 'react';
import {TextInput, View, Image, TouchableOpacity} from 'react-native';
import { images } from '../../assets/styles/images';
import { styles } from './InputText.style';

const InputText = props => {
  const {
    onChangeHandler,
    onFocus,
    onSubmit,
    onClear,
    isClearButtonShown,
  } = props;
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          testID={'searchTextInput'}
          placeholder={'You can search by drug or by disease'}
          value={props.value}
          onChangeText={val => onChangeHandler(val)}
          onFocus={() => onFocus()}
          onSubmitEditing={() => onSubmit()}
          keyboardType={'email-address'}
          returnKeyType={'search'}
        />
        {isClearButtonShown && (
          <TouchableOpacity style={styles.clearIcon} onPress={() => onClear()}>
            <Image source={images.clear} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default InputText;
