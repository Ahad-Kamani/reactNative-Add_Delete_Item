import React, {useState} from 'react';
import {
    StyleSheet,
    TextInput,
    Button,
    Modal,
    Text,
    View,
} from 'react-native';

const GetUserInput = (props) => {

    const [displayItem, updatetDisplayItem] = useState('');
    
    // function getUserInputFromField(userInput){
    //   updatetDisplayItem(userInput);
    // }
    const getUserInputFromField = (userInput) => {
        updatetDisplayItem(userInput);
    }

    const addItemOnSubmission = () => {
        props.addItem(displayItem);
        updatetDisplayItem('');
    }

    return(
     <Modal visible={props.modalVisibility} animationType="slide">
      <View style={styles.inputContainer}>
       <TextInput 
          placeholder="Enter Here" 
          style={styles.input}
          onChangeText={getUserInputFromField}
          value={displayItem}
       />
       <View style={styles.buttonContainer}>
         <View style={styles.button}>
           <Button title='CANCEL' color='red' onPress={props.cancelItem}/>
         </View>
         <View style={styles.button}>
           {/* <Button title='ADD' onPress={() => props.addItem(displayItem)}/> */}
           {/* <Button title='ADD' onPress={props.addItem.bind(this, displayItem)}/> */}
           <Button title='ADD' onPress={addItemOnSubmission}/>
         </View>
       </View>
      </View>
     </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center'
    },
    input: {
        width: '80%', 
        borderColor: 'black', 
        borderWidth: 1, 
        padding: 10,
        marginBottom: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%',
    },
    button: {
        width: '40%'
    },
});

export default GetUserInput;