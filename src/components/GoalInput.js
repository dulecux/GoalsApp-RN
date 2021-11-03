import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button, Modal } from "react-native";


const GoalInput = ({ onAddGoal, visible, cancel }) => {

    const [input, setInput] = useState('');


    const inputHandler = (newInput) => {
        setInput(newInput);
      };

    return (
        <Modal visible={visible} animationType="slide">
        <View style={styles.inputContainer}>
            <TextInput 
                placeholder="Course Goal" 
                value={input}
                onChangeText={inputHandler}  
                style={styles.input} 
            />
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                <Button title="CANCEL" color="red" onPress={cancel} />
                </View>
                <View style={styles.button}>
                <Button 
                    onPress={() => onAddGoal(input, () => setInput(''))}
                    title="ADD" 
                    style={styles.button}
                />
                </View>
            </View>
         </View>
         </Modal> 
    );
}

const styles = StyleSheet.create({
    input: {
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        width: 300,
        marginBottom: 10
      },
      inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
      },
      buttonContainer: {
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: 200

      },
      button: {
          width: 80
      }
});

export default GoalInput;