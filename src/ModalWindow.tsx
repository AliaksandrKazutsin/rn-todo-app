import React from "react";
import {
	View, 
	StyleSheet,
	Alert, 
	Modal,
	Text,
	Pressable
} from 'react-native'; 
 
interface ModalView {
	textTitle: string,
	text: string,
	modalVisible: boolean,
	showModal: (value: boolean) => void,
	submit: () => void, 
}

export const ModalWindow = ({ modalVisible, submit, showModal, textTitle, text } :ModalView) => {
	return (
		<View style={styles.centeredView}>
			<Modal
				animationType="slide"
				transparent={true}
				visible={modalVisible}
				onRequestClose={() => {
				Alert.alert('Modal has been closed.');
				showModal(!modalVisible);
			}}>
				<View style={styles.centeredView}>
					<View style={styles.modalView}>
						<Text style={styles.modalText}>{text}</Text>
						<View style={styles.wrapperButton}>
							<Pressable
								style={[styles.button, styles.buttonStyle]}
								onPress={() => submit()}>
								<Text style={styles.textStyle}>{textTitle}</Text>
							</Pressable>
							<Pressable
								style={[styles.button, styles.buttonStyle]}
								onPress={() => showModal(!modalVisible)}>
								<Text style={styles.textStyle}>Close</Text>
							</Pressable>
						</View>
					</View>
				</View>
			</Modal> 
		</View>
	);
};

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	modalView: {
		margin: 20,
		backgroundColor: 'white',
		borderRadius: 20,
		padding: 35,
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: {
		  width: 0,
		  height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
	},
	wrapperButton: {
		width: 120,  
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingTop: 15,
	}, 
	button: {
		borderRadius: 5,
		padding: 10,
		elevation: 2,
	},
	buttonStyle: {
		backgroundColor: '#6A5ACD',
	},
	textStyle: {
		color: 'white',
		fontWeight: 'bold',
		textAlign: 'center',
	},
	modalText: {  
		fontSize: 15,
		fontWeight: '500',
	},
})
