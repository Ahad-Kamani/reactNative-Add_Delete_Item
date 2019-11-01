import React from 'react';
import {
    TouchableWithoutFeedback,
    TouchableNativeFeedback,
    TouchableHighlight,
    TouchableOpacity,
    StyleSheet,
    Text,
    View,
} from 'react-native';

const DisplayItem = (props) => {
    return(
    //  <TouchableOpacity activeOpacity={0.8} onPress={props.deleteItem}>
     <TouchableOpacity activeOpacity={0.8} onPress={props.deleteItem.bind(this, props.id)}>
      <View style={styles.listItem}>
       <Text>{props.title}</Text> 
      </View>
      {/* <TouchableHighlight underlayColor={'#ccc'} activeOpacity={0.8} > </TouchableHighlight> */}
      {/* <TouchableHighlight underlayColor={'blue'} activeOpacity={0.8} > </TouchableHighlight> */}
      {/* <TouchableNativeFeedback activeOpacity={0.8} > </TouchableNativeFeedback> */}
      {/* <TouchableWithoutFeedback> </TouchableWithoutFeedback> */}
     </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem: {     
      padding: 10,
      marginVertical: 10,
      backgroundColor: '#ccc',
      borderColor: 'black',
      borderWidth: 1,
    }
});

export default DisplayItem;