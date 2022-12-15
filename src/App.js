import React, { useState } from 'react';
import TaskList from './components/TaskList.js';
import './App.css';

const TASKS = [
  {
    id: 1,
    title: 'Mow the lawn',
    isComplete: false,
  },
  {
    id: 2,
    title: 'Cook Pasta',
    isComplete: true,
  },
];

const App = () => {
  const tasksCopy = TASKS.map(task => {return{...task};});
  const [tasksList,setTasksList] = useState(tasksCopy);
  const updateComplete = (id) => {
    const newList = [];
    for (const task of tasksList) {
      if (task.id !== id) {
        newList.push(task);
      }
      else {
        const newTask = {
          ...task,
          isComplete: !task.isComplete,
        };
        newList.push(newTask);
      }
      setTasksList(newList);
    }
  };
  console.log(tasksList);
  console.log('App');
  // const taskFunctions = [updateComplete];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>{<TaskList tasks={TASKS} updateComplete={updateComplete}/>}</div>
      </main>
    </div>
  );
};

export default App;
