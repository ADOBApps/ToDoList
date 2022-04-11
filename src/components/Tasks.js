/*
This component receive an object throught this.props and 
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Bootstrap Style
import './bootstrap/reactjs/css/bootstrap.css';
import './bootstrap/reactjs/css/bootstrap-utilities.css';
import './bootstrap/reactjs/css/bootstrap-grid.css';
import './bootstrap/reactjs/css/bootstrap-reboot.css';
import './bootstrap/reactjs/css/bootstrap-icons.css';
import './bootstrap/reactjs/css/bootstrap-glyphicons.css';

//React class
import Task from './Task';


class Tasks extends Component {
	render(){
		return this.props.tasks.map(task =>
			<Task 
				key={task.id}
				task={task}
				deleteTask={this.props.deleteTask}
				checkDone={this.props.checkDone}/>
		);
	}
}

Tasks.propTypes = {
	tasks: PropTypes.array.isRequired
}

export default Tasks;