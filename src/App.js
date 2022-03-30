import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './App.css';


//Components
import tasks from './sample/task.json';
import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';

console.log(tasks);

class App extends Component {
  state={
	tasks: tasks
  }

  render(){
	return(
	  <div>
	  	<TaskForm/>
	  	<Tasks tasks={this.state.tasks}/>
	  </div>
	);
  }
}


export default App;
