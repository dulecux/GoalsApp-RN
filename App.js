import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './src/components/GoalItem';
import GoalInput from './src/components/GoalInput';

export default function App() {

  const [listItems, setListItems] = useState([]);

  const [addMode, setAddMode] = useState(false);

  const addGoalHandler = (goalTitle, callback) => {
      setListItems( currentGoals => [...currentGoals, { id: Math.random().toString(), value: goalTitle}]);
      callback();
      setAddMode(false);
  };

  const removeGoalHandler = (goalId) => {

      setListItems(currentGoals => {
        return currentGoals.filter( goal => goal.id !== goalId);
      });
  };

  const cancelGoalAddition = () => {
    setAddMode(false);
  };


  return (
    <View style={styles.container}>
      <Button title="Add New Goal" onPress={() => setAddMode(true)} />
      <GoalInput visible={addMode} cancel={cancelGoalAddition} onAddGoal={addGoalHandler} />
        <FlatList 
          data={listItems} 
          keyExtractor={item => item.id}
          renderItem={ ({ item }) => {
            return <GoalItem onDelete={removeGoalHandler} item={item} />
          }}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30
  }
});
