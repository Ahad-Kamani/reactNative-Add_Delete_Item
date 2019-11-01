/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {
  StyleSheet,
  FlatList,
  ScrollView,
  View,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import DisplayItem from './components/displayList';
import GetUserInput from './components/getInput';

const App: () => React$Node = () => {

  const [displayItemList, updatetDisplayItemList] = useState([]);
  const [modalVisible, updatetModalVisibility] = useState(false);

  console.log('LIST ITEMS');
  console.log(displayItemList);
  
  const addItemOnList = (userInputValue) => {

    if(userInputValue.Length === 0)
    {
      return;
    }
    // updatetDisplayItemList([...displayItemList, displayItem]);
    updatetDisplayItemList( 
      (currentItem) => [...currentItem, 
        // {key: Math.random().toString(), value: displayItem}
        {id: Math.random().toString(), value: userInputValue}
      ]
    );

    updatetModalVisibility(false);
  }
  
  const deleteItemOnList = (listItemID) => {
    // console.log('To Be Deleted: ' + listItemID);
    // console.log(displayItemList);
    updatetDisplayItemList( 
      (currentItem) => {
        return currentItem.filter( (itemValue) => itemValue.id !== listItemID ); 
      }
    );
  }

  const addItemOnClick = () => {
    updatetModalVisibility(true);
  }

  const cancelItemOnClick = () => {
    updatetModalVisibility(false);
  }

  return (
    <View style={styles.screen}>
      <Button title="Add New Item" onPress={addItemOnClick} />
      {/* <Button title="Add New Item" onPress={() => updatetModalVisibility(true)} /> */}
      <GetUserInput 
        modalVisibility={modalVisible} 
        addItem={addItemOnList} 
        cancelItem={cancelItemOnClick}
      />

      {/* <View>
        {
          displayItemList.map( 
            (item, i) => 
            (
              <View key={i} style={styles.listItem}> 
                <Text>{item}</Text> 
              </View> 
            )
          )
        }
      </View> */}

      {/* <ScrollView>
        {
          displayItemList.map( 
            (item, i) => 
            (
              <View key={i} style={styles.listItem}> 
                <Text>{item}</Text> 
              </View> 
            )
          )
        }
      </ScrollView> */}
      
      <FlatList
      keyExtractor={(item, index) => item.id}
      data={displayItemList}
      renderItem=
        { 
          (itemData) => 
            (
              //  <DisplayItem deleteItem={deleteItemOnList.bind(this, itemData.item.id)} title={itemData.item.value} />
               <DisplayItem id={itemData.item.id} deleteItem={deleteItemOnList} title={itemData.item.value} />
            )
        }
      />
    
    </View>
    
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 30
  },
});

export default App;
