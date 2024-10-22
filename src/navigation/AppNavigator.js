import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TaskListScreen from '../screens/TaskListScreen';
import AddTaskScreen from '../screens/AddTaskScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TaskList" component={TaskListScreen} options={{ title: 'Lista de Tarefas' }} />
        <Stack.Screen name="AddTask" component={AddTaskScreen} options={{ title: 'Adicionar Tarefa' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
