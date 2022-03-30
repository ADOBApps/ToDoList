import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Task extends Component {

	StyleCompleted(){
		return{
			fontSize: "20px",
			color: this.props.task.done ? "gray" : "black",
			textDecoration: this.props.task.done ? "line-through" : "none"
		}	
	}

	render(){
		return (
			<div style={this.StyleCompleted()}>
				{this.props.task.title} - {this.props.task.done}
		  		<input type="checkbox"/>
	  			<button style={btnDelete}>x</button>
			</div>
	  	);
	}
}

Task.propTypes = {
	task: PropTypes.object.isRequired
}

//Inner style
const btnDelete = {
	fontSize: "18px",
	background: "#ea2027",
	color: "#fff",
	border: "none",
	padding: "8px 11px",
	borderRadius: "50%",
	cursor: "pointer"
}

export default Task;