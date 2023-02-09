import React from "react";
import {View, Text, StyleSheet} from 'react-native';

type Title = {
	title: string;
}

export const Navigation = ({ title }: Title) => {
	return (
		<View style={styles.navbar}>
			<Text style={styles.text}>{title}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	navbar:{
		height: 70,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#6A5ACD',
		paddingBottom: 10,
	},
	text: {
		color: '#fff',
		fontSize: 20,
	},
})
