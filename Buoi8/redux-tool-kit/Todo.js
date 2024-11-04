import { Text, SafeAreaView, StyleSheet, FlatList, TextInput, View, Button } from 'react-native';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleComplete, deleteTodo } from './todoSlice';

const Todo = () => {
  const [text, setText] = useState('');
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleCreateButton = () => {
     
  }

  
  return (
    <View style={{padding: 10}}>
      <TextInput
        style={{ borderWidth: 1 , padding: 5}}
        value={text}
        onChangeText={() => {}}
        placeholder = "Enter your todo"
        placeholderTextColor = "gray"
      />
      <br/>
      <Button title="Create" onPress = {handleCreateButton
      }/>

      <FlatList
          data={todos}
          renderItem={
            <Text> item.id </Text>
          }
          keyExtractor={item => item.id}
          
        />
    </View>
  );
};

export default Todo;
