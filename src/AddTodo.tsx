import React from "react";
import {
	View, 
	StyleSheet, 
	TextInput, 
	Button,  
} from 'react-native';
import { useAddTodo } from "./hook";
import { ModalWindow } from "./ModalWindow";
 
export const AddTodo: React.FC = () => {
	const {
		value, 
		setValue, 
		showModal, 
		pressHandler, 
		openModal, 
		confirmAddTodo
	} = useAddTodo();

	return (
		<>
			<View style={styles.block}> 
				<TextInput 
					style={styles.input}
					placeholder={'Add text...'}
					value={value}
					onChangeText={setValue} 
					autoCorrect={false}
				/>
				<View style={{ width: 70 }}>
					<Button color={'#6A5ACD'} title="Add" onPress={pressHandler} />
				</View>	 
			</View>
			<ModalWindow
				textTitle="Add"  
				text={`Add new todo '${value}' ?`}
				modalVisible={showModal}
				showModal={openModal}
				submit={confirmAddTodo}
			/>
		</>
	);
}

const styles = StyleSheet.create({
	block:{
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		marginBottom: 15,
	},
	input: {
		width: '75%',
		borderStyle: 'solid',
		borderBottomWidth: 2,
		borderBottomColor: '#3949ab',
		padding: 10,
	}, 
})
