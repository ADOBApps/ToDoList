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
			<div className="container p-5 my-5 border bg-secundary text-white rounded">
				<div style={this.StyleCompleted()} className="row bg-light rounded">
				
				<div className="col-sm d-flex flex-row-reverse">
					<button className="btn rounded-3"onClick={this.props.checkDone.bind(this, task.id)}>
						<span className={this.props.task.done ? "bi-check2-square" : "bi-square"}></span>
					</button>
					<button className="btn rounded-3" onClick={this.props.deleteTask.bind(this, task.id)}>
						<span className='bi-x-circle-fill'></span>
					</button>
				</div>

					<p className="h6 text-center">{task.title} ({task.id})</p>
					<div className='row'>
						<div className='col-sm-12'><hr/></div>
					</div>
					<p className='well lead'>{this.props.task.description}</p>
				</div>
				
			</div>
	  	);
	}
}

Task.propTypes = {
	task: PropTypes.object.isRequired
}


export default Task;