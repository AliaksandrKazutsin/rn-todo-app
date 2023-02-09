import { useState } from "react";
import { Alert, Keyboard, Vibration } from "react-native";
import { useAppDispatch, useAppSelector } from "./redux-toolkit/hook";
import { addTodo, removeTodo, showTodoModal } from "./redux-toolkit/todoSlice";

export const useAddTodo = () => {
	const [value, setValue] = useState('');
	const { showModal } = useAppSelector(state => state.todos);

	const dispatch = useAppDispatch();

	const openModal = (value: boolean): void => {
    	dispatch(showTodoModal(value));
  	};
	
	const pressHandler = () => {
		if (value.trim()) {
			dispatch(showTodoModal(!showModal))
		} else {
			Alert.alert('Field should not be empty');
		} 
	}  

	const confirmAddTodo = () => {
		dispatch(addTodo(value));
		dispatch(showTodoModal(!showModal))
		setValue('');
		Keyboard.dismiss();
		Vibration.vibrate(0.2 * 1000);
	} 

	return {
		value,
		setValue,
		showModal,
		openModal,
		pressHandler,
		confirmAddTodo,
	}
}
