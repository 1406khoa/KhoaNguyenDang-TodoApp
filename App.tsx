import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { useState } from 'react';
import React from 'react';
import ListTodo from './src/components/todo/list.todo';
import InputTodo from './src/components/todo/input.todo';
import { ITodo } from './src/type/model';

export default function App() {

  const [todos, setTodos] = useState<ITodo[]>([]);

  const addTodo = (task: string) => {
    if (task.trim().length === 0) return;
    setTodos((prevTodos)=>[...prevTodos, {id: prevTodos.length +1, title: task}])
  }


  return (
    <View style={styles.container}>
      <InputTodo onAddToDo = {addTodo} />
      <ListTodo todos = {todos} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginHorizontal: 20,
  },
});
