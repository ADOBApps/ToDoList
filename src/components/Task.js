import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Bootstrap Style
import './bootstrap/v5.1.3/css/bootstrap.css';
import './bootstrap/v5.1.3/css/bootstrap-utilities.css';
import './bootstrap/v5.1.3/css/bootstrap-grid.css';
import './bootstrap/v5.1.3/css/bootstrap-reboot.css';

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
			<div className="p-5 my-5 border">
				<div style={this.StyleCompleted()} className="row mb-3 mt-3 bg-light">
					<p className="h6">{this.props.task.title}</p>
					<p>{this.props.task.description}</p>
				</div>
				<div className="col-sm">
					<button className="btn rounded-3">
						<input className="form-check-input" type="checkbox"/>
					</button>
					<button className="btn btn-danger rounded-3">x</button>
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