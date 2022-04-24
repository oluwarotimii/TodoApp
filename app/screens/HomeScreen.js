import React, {useState} from 'react';
import {
  Image,
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import TodoItem from '../components/TodoItems';
import uuid from 'react-native-uuid';
uuid.v4(); // ⇨ '11edc52b-2918-4d71-9058-f7285e29d894'





const HomeScreen = () => {
   
  const [items, setItems] = useState([
    {id:uuid.v4(), text: 'Buy milk'},
    {id:uuid.v4(), text: 'Buy bread'},
    {id:uuid.v4(), text: 'Finish homework'},
    {id:uuid.v4(), text: 'Iron clothes'},
    {id:uuid.v4(), text: 'Workout once per week'},
  ]);

  const [enteredText, setEnteredText] = useState('');

  const removeItem = id => {
    setItems(oldItems => {
      return oldItems.filter(item => item.id != id);
    });
  };

  const addItem = text => {
    setItems(oldItems => {
      return [{id:items, text}, ...oldItems];
    });
  };

  return (
    <View style={styles.parentContainer}>
      <View style={styles.header}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frandom&psig=AOvVaw31U4_bABXLqq6l-Se9pV-B&ust=1650446547457000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCOjV09fmn_cCFQAAAAAdAAAAABAD',
          }}
        />
        <Text style={styles.headerText}>Todo Items</Text>
      </View>
      <View style={styles.bodyContainer}>
        <FlatList
          data={items}
          //scrollEnabled={items}
         // keyExtractor = {(items) => items.id}
          renderItem={({item}) => (
            <TodoItem item={item} removeItem={removeItem} />
          )}
        />
      </View>
      <View style={styles.footerContainer}>
        <TextInput
          value={enteredText}
          placeholder={'Add item'}
          style={styles.textInput}
          onChangeText={text => setEnteredText(text)}
        />
        <TouchableOpacity
          onPress={() => {
            addItem(enteredText);
          }}
          style={styles.addButton}>
          <Text style={styles.addButtonText}>Add Item</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  parentContainer: {
    fontSize:16,
    flex: 1,
    flexDirection: 'column',

  },
  header: {
    width: '100%',
    height: '9%',
    paddingLeft: 30,
    flexDirection: 'row',
    marginTop: '5%',
  },
  headerText: {
    // color:'white',
    fontWeight: '600',
    fontSize: 22,
    paddingLeft: 15,
    paddingTop: 5,
  },
  bodyContainer: {
    paddingTop:5,
    width: '100%',
    height: '60%',
  },
  footerContainer: {
    paddingLeft: 33,
    width: '100%',
    height: '10%',
  },
  textInput: {
    borderColor: 'rgba(255,0,0,0.2)',
    borderWidth: 1,
    padding: 15,
    width: '90%',
    marginBottom: 5,
  },
  addButton: {
    backgroundColor: 'orange',
    padding: 10,
    width: '90%',
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontWeight: '600',
  },
});

export default HomeScreen;