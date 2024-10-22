import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Componente que representa cada item de tarefa
const TaskItem = ({ task, onDelete, onComplete }) => {
  return (
    <View style={styles.taskItem}>
      {/* Texto da tarefa*/}
      <Text style={task.completed ? styles.completedTask : styles.taskText}>{task.text}</Text>
      
      {/* Botão para marcar como concluído */}
      <TouchableOpacity onPress={onComplete}>
        <Icon name={task.completed ? 'check-box' : 'check-box-outline-blank'} size={24} color="green" />
      </TouchableOpacity>
      
      {/* Botão para remover a tarefa */}
      <TouchableOpacity onPress={onDelete}>
        <Icon name="delete" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  taskText: {
    fontSize: 18,
  },
  completedTask: {
    fontSize: 18,
    textDecorationLine: 'line-through',
    color: '#bbb',
  },
});

export default TaskItem;
