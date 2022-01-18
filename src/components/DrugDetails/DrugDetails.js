// react library imports
import React from 'react';
import {Text, View} from 'react-native';
import { styles } from './DrugDetails.style';

// flatlist render item
const DrugDetails = (props) => {
  // getting data from parent
  let item = props.item ? props.item : null;
  let name = item ? item.name : '';
  let released = item ? item.released : '';
  let description = item ? item.description : '';
  let diseases = item ? item.diseases : null;
  
  return (
    <View style={styles.container}>
      <View style={styles.upperView}>
        <View style={styles.drugDetails}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.date}>{released}</Text>
        </View>
        {
          diseases.map((item, index) => (
            <Text style={styles.disease} key={index}>
                {item}
            </Text>
          ))
        }
      </View>
      <View style={styles.lowerView}>
        <Text style={styles.description} numberOfLines={3}>{description}</Text>
      </View>
    </View>
  );
};

export default DrugDetails;