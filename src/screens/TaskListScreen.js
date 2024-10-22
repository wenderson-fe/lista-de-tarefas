import React, { useState, useEffect } from 'react';
import { View, FlatList, Button, StyleSheet } from 'react-native';
import TaskItem from '../components/TaskItem';
import { loadTasks, saveTasks } from '../storage/TaskStorage';

const TaskListScreen = ({ navigation }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Carrega as tarefas do AsyncStorage ao iniciar o app
    const fetchTasks = async () => {
      const storedTasks = await loadTasks();
      setTasks(storedTasks);
    };
    fetchTasks();
  }, []);

  // Adiciona uma nova tarefa e salva
  const addTask = (task) => {
    const newTasks = [...tasks, task];
    setTasks(newTasks);
    saveTasks(newTasks);
  };

  // Marca uma tarefa como concluída/incompleta
  const toggleComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
    saveTasks(newTasks);
  };

  // Remove uma tarefa e salva
  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
    saveTasks(newTasks);
  };

  return (
    <View style={styles.container}>
      {/* Lista de tarefas */}
      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TaskItem
            task={item}
            onComplete={() => toggleComplete(index)}
            onDelete={() => deleteTask(index)}
          />
        )}
      />
      <Button title="Adicionar Tarefa" onPress={() => navigation.navigate('AddTask', { addTask })} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
});

export default TaskListScreen;
