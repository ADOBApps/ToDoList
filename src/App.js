/**
 * @author Acxel Orozco <acxelorozco@gmail.com>
 * @description Main script app, this build pages calling module components
 */
import React, { Component } from 'react';

import './App.css';

/**
 * @description JSON object contains main activities
*/
import tasks from './sample/task.json';

/**
 * @description React's built-in components
*/
import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';

/**
 * @description Boostrap's Component
 * @param headerText
*/
import HeaderTemp from './components/bootstrap/reactjs/rjs/HeaderTemp'
/**
 * @description Boostrap's Component
 * @param footTitle
 * @param footEmail
 * @param footYear
*/
import FootTemp from './components/bootstrap/reactjs/rjs/FootTemp'

/**
 * @description Special module which gets json by https conection
*/
// eslint-disable-next-line
import Posts from './components/Posts';


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
		const myDate = new Date();
		return(
		<div className='container-fluid'>
			<HeaderTemp headerText={"Todo list"}/>
			<TaskForm addTask={this.addTask}/>
			<Tasks
				tasks={this.state.tasks}
				deleteTask={this.deleteTask}
			  	checkDone={this.checkDone}/>
			<FootTemp 
				footTitle={"Contact us"}
				footEmail={"acxelorozco@gmail.com"}
				footYear={myDate.getFullYear()}/>	
		</div>
		);
	}
}


export default App;
