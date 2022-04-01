import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Bootstrap Style
import './bootstrap/v5.1.3/css/bootstrap.css';
import './bootstrap/v5.1.3/css/bootstrap-utilities.css';
import './bootstrap/v5.1.3/css/bootstrap-grid.css';
import './bootstrap/v5.1.3/css/bootstrap-reboot.css';

//React class
import Task from './Task';


class Tasks extends Component {
	render(){
		return this.props.tasks.map(task => <Task key={task.id} task={task}/>);
	}
}

Tasks.propTypes = {
	tasks: PropTypes.array.isRequired
}

export default Tasks;