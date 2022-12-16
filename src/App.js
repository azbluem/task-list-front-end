import React, { useEffect, useState } from 'react';
import TaskList from './components/TaskList.js';
import './App.css';
import axios from 'axios';

// const TASKS = [
//   {
//     id: 1,
//     title: 'Mow the lawn',
//     isComplete: false,
//   },
//   {
//     id: 2,
//     title: 'Cook Pasta',
//     isComplete: true,
//   },
// ];

const App = () => {
  const URL = 'http://127.0.0.1:5000/tasks';
  const [tasksList, setTasksList] = useState([]);

  useEffect(() => {
    axios
      .get(`${URL}`)
      .then((response) => {
        console.log(response);
        const apiList = response.data.map((task) => {
          return {
            id: task.id,
            title: task.title,
            isComplete: task.is_complete,
          };
        });
        setTasksList(apiList);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  // const tasksCopy = TASKS.map((task) => {
  //   return { ...task };
  // });

  const updateComplete = (id, isComplete) => {
    let mark = isComplete ? 'mark_incomplete' : 'mark_complete';
    axios
      .patch(`${URL}/${id}/${mark}`)
      .then(() => {
        const newList = [];
        for (const task of tasksList) {
          if (task.id !== id) {
            newList.push(task);
          } else {
            const newTask = {
              ...task,
              // isComplete: !task.isComplete,
            };
            newList.push(newTask);
          }
          setTasksList(newList);
          console.log('task list is updated successfully.');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const deleteTask = (id) => {
    axios
      .delete(`${URL}/${id}`)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
    const newList = [];
    for (const task of tasksList) {
      if (task.id !== id) {
        newList.push(task);
      }
    }
    setTasksList(newList);
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
        <div>
          {
            <TaskList
              tasks={tasksList}
              updateComplete={updateComplete}
              deleteTask={deleteTask}
            />
          }
        </div>
      </main>
    </div>
  );
};

export default App;
