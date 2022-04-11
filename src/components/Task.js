/*
This component show each for each task allowed
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

class Task extends Component {

	StyleCompleted(){
		return{
			fontSize: "20px",
			color: this.props.task.done ? "gray" : "black",
			textDecoration: this.props.task.done ? "line-through" : "none"
		}	
	}

	render(){

		const {task} = this.props;
		return (
			<div className="container p-5 my-5 border bg-primary text-white rounded">
				<div style={this.StyleCompleted()} className="row mb-3 mt-3 bg-light rounded">
					<p className="h6">{task.title} ({task.id})</p>
					<p className='well'>{this.props.task.description}</p>
				</div>
				<div className="col-sm">
					<button className="btn rounded-3"onClick={this.props.checkDone.bind(this, task.id)}>
						<span className={this.props.task.done ? "bi-check2-square" : "bi-square"}></span>
					</button>
					<button className="btn rounded-3" onClick={this.props.deleteTask.bind(this, task.id)}>
						<span className='bi-x-circle-fill'></span>
					</button>
				</div>
			</div>
	  	);
	}
}

Task.propTypes = {
	task: PropTypes.object.isRequired
}

//Inner style
/*const btnDelete = {
	fontSize: "18px",
	background: "#ea2027",
	color: "#fff",
	border: "none",
	padding: "8px 11px",
	borderRadius: "50%",
	cursor: "pointer"
}
*/
export default Task;