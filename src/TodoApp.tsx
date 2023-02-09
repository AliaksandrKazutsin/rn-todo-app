import React from 'react';
import { 
    StyleSheet, 
    View, 
    FlatList, 
    Text 
} from 'react-native';

import { useAppSelector } from './redux-toolkit/hook';

import { AddTodo } from './AddTodo';
import { Todo } from './Todo';
import { Navigation } from './Navigation';
 
export const TodoApp: React.FC = () => { 
  const todos = useAppSelector(state => state.todos.list);
  
//   const addTodo = (title) => {
//     setTodos(prev => [
//       ...prev, 
//       {
//         id: Date.now().toString(),
//         title,
//       }
//     ])
//   }
  
//   const removeTodo = (id) => {
//     setTodos(prev => prev.filter(item => item.id !== id));
// 	}

  return (
    <View>
      <Navigation title="Todo App"/>
      <View style={styles.container}>
        <AddTodo /> 
        <FlatList
          keyExtractor={item => item.id.toString()}
          data={todos}
          renderItem={({item}) => <Todo todo={item} /> }
        />   
        {!todos.length && <Text>No todos</Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  }, 
});
