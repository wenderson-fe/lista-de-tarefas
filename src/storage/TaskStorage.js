import AsyncStorage from '@react-native-async-storage/async-storage';

// Função para carregar as tarefas do armazenamento local
export const loadTasks = async () => {
  try {
    const storedTasks = await AsyncStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  } catch (error) {
    console.error('Erro ao carregar as tarefas:', error);
    return [];
  }
};

// Função para salvar as tarefas no armazenamento local
export const saveTasks = async (tasks) => {
  try {
    await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
  } catch (error) {
    console.error('Erro ao salvar as tarefas:', error);
  }
};
