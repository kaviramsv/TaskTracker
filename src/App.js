import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import FeedbackItem from './components/FeedbackItem';
import FeedbackList from './components/FeedbackList';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import { TaskProvider } from './context/taskContext';
import Statistics from './Statistics';
import todos from './tasks';



function App() {

  // const [tasks, setTasks] = useState(todos);

  // const deleteHandler = (id) => {
  //   if (window.confirm('are you sure you want to delete?')) {
  //     setTasks(tasks.filter(task => task.id !== id));
  //   }
  // }

  // const addHandler = (task) => {
  //   task.id = uuidv4()
  //   console.log(task);
  //   setTasks([task, ...tasks])
  // }
  return (
    <TaskProvider>
      <Header />
      <div className="container">
        <TaskForm />
        <Statistics />
        <FeedbackList />
      </div>
    </TaskProvider>
  );
}

export default App;
//mpm install uuid