import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {styles} from './Home.style';

const Home = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View>
          <Text>{'Hi'}</Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Home;