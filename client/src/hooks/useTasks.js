import { useState, useEffect } from 'react';
import { useFetching } from './useFetching';
import TaskService from '../API/TaskService';

const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [groups, setGroups] = useState([]);
  const [selectGroup, setSelectGroup] = useState('');

  const fetchTasksAndGroups = async () => {
    const [tasksResponse, groupsResponse] = await TaskService.getAll();
    setTasks(tasksResponse.data);
    setGroups(groupsResponse.data);
    setSelectGroup(groupsResponse.data[0].id);
  };

  const [fetchData, isLoading, error] = useFetching(fetchTasksAndGroups);

  useEffect(() => {
    fetchData();
  }, []);

  return [tasks, setTasks, groups, setGroups, isLoading, selectGroup, setSelectGroup, error];
};

export default useTasks;