import React from "react";
import { 
	View, 
	StyleSheet, 
	Text, 
	Image, 
	TouchableOpacity 
} from "react-native"; 
import { useAppDispatch} from './redux-toolkit/hook';
import { removeTodo } from "./redux-toolkit/todoSlice";

interface TodoItemProps {
	id: string,
	title: string,
}

interface Todo {
	todo: TodoItemProps,
}

export const Todo = ({ todo }: Todo) => {
	const dispatch = useAppDispatch();
	  
	const deleteTodo = (id: string) => {
		dispatch(removeTodo(id));
	};
	 
	return (  
		<TouchableOpacity 
			activeOpacity={0.5} 
			onPress={() => console.log(todo.id)}
			onLongPress={() => deleteTodo(todo.id)}
		>
			<View style={styles.todo}>
				<Image 
					style={styles.logo}
					source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
				/>
				<Text>{todo.title}</Text>
			</View>
		</TouchableOpacity>   
	)
}

const styles = StyleSheet.create({
	todo: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: 15,
		borderWidth: 1,
		borderColor: '#eee',
		borderRadius: 5,
		marginBottom: 10,
	},
	logo: { 
		width: 20,
		height: 20, 
		marginRight: 5,
	},
})
