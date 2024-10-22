import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

// Componente que gerencia o input de uma nova tarefa
const TaskInput = ({ onSaveTask }) => {
  const [taskText, setTaskText] = useState('');

  const saveTask = () => {
    if (taskText.trim()) {
      onSaveTask({ text: taskText, completed: false });
      setTaskText('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite a tarefa"
        value={taskText}
        onChangeText={setTaskText}
      />
      <Button title="Salvar Tarefa" onPress={saveTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 16,
  },
});

export default TaskInput;
