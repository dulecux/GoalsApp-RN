import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";


const GoalItem = ({ item, onDelete }) => {

    return (
        <TouchableOpacity onPress={() => onDelete(item.id)}>
        <View style={styles.item}>
            <Text>{item.value}</Text>
        </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    item: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
      }
});

export default GoalItem;