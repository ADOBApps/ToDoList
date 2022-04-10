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

  //Will be exec at TaskForm
  addTask = (title, description) => {
  	const newTask = {
  		title: title,
  		description: description,
  		id: this.state.tasks.length
  	}
  	this.setState({
  		tasks: [...this.state.tasks, newTask]
  	});
  	console.log("New task " + title + " " + description);
  }

  deleteTask = (id) => {
  	const newTaskArray = this.state.tasks.filter(task => task.id !== id);
  	console.log(newTaskArray);
  	this.setState({
  		tasks: newTaskArray
  	});
  }

  checkDone = (id) => {
  	const newTaskArray1 = this.state.tasks.map(task => {
  		if (task.id === id) {
  			task.done = !task.done;
  		}
  		return task;
  	});
  	this.setState({
  		tasks: newTaskArray1
  	});
  }

  render(){
		return(
	 	 <div>
		  	<TaskForm addTask={this.addTask}/>
		  	<Tasks tasks={this.state.tasks} deleteTask={this.deleteTask} checkDone={this.checkDone}/>
		  </div>
		);
  }
}


export default App;
