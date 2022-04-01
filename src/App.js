import React, { Component } from 'react';
//import ReactDOM from 'react-dom';

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

  addTask = (title, description) => {
  	console.log("New task " + title + " " + description)
  }

  render(){
		return(
	 	 <div>
		  	<TaskForm addTask={this.addTask}/>
		  	<Tasks tasks={this.state.tasks}/>
		  </div>
		);
  }
}


export default App;
