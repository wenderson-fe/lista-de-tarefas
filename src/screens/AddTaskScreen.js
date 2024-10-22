import React from 'react';
import { View, StyleSheet } from 'react-native';
import TaskInput from '../components/TaskInput';

const AddTaskScreen = ({ route, navigation }) => {
  const { addTask } = route.params;

  const saveTask = (task) => {
    addTask(task);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* Input de nova tarefa */}
      <TaskInput onSaveTask={saveTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default AddTaskScreen;
