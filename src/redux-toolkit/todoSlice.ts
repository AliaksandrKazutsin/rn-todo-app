import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Todo = {
	id: string;
	title: string;
}

type TodosState = {
	list: Todo[];
	showModal: boolean;
}

const initialState: TodosState = {
	list: [],
	showModal: false,
}

const todoSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		addTodo(state, action: PayloadAction<string>) {
			state.list.push({
				id: Date.now().toString(), 
				title: action.payload
			});
		},
		removeTodo(state, action: PayloadAction<string>) {
			state.list = state.list.filter(item => item.id !== action.payload);
			
		},
		showTodoModal(state, action: PayloadAction<boolean>) {
			state.showModal = action.payload
		}, 
	}
});

export const { addTodo, removeTodo, showTodoModal } = todoSlice.actions;

export default todoSlice.reducer;
