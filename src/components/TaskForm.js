/*
This component receive form-data
*/

import React, { Component } from 'react';

//Bootstrap Style
import './bootstrap/reactjs/css/bootstrap.css';
import './bootstrap/reactjs/css/bootstrap-utilities.css';
import './bootstrap/reactjs/css/bootstrap-grid.css';
import './bootstrap/reactjs/css/bootstrap-reboot.css';
import './bootstrap/reactjs/css/bootstrap-icons.css';
import './bootstrap/reactjs/css/bootstrap-glyphicons.css';


export default class TaskForm extends Component {

	state = {
		Tasktitle: "",
		Taskdescription: ""
	}
	onSubmit = (e) => {
		console.log(this.state);
		e.preventDefault();
		this.props.addTask(this.state.Tasktitle, this.state.Taskdescription)
	}
	onChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	render() {
		return (

			<form onSubmit={this.onSubmit}>
				<div className="container p-5 my-5 bg-dark rounded">
					<div className="well h6 text-white">New Task</div>
					<div className="form-floating mb-3 mt-3">
						<input 
							type="text" 
							id="task-inp1" 
							placeholder="Type a task please" 
							className="form-control"
							name="Tasktitle" 
							onChange={this.onChange} 
							value={this.state.title}/>
						<label htmlFor="task-inp1">Title</label>
					</div>
					<div className="form-floating">
						<textarea 
							className="form-control" 
							id="descript-t1" 
							name="Taskdescription" 
							placeholder="Description goes here" 
							onChange={this.onChange} 
							value={this.state.description}>
						</textarea>
						<label htmlFor="descript-t1">Description</label>
					</div>
					<div className='btn-group-xs'>
						<button className="btn" type='button'>
							<label className="form-check-label text-white">
								<input 
									className="form-check-input" 
									type="checkbox" 
									name="remember-inp1"/>Remember
							</label>
						</button>
						<button className="btn btn-primary" type="submit">Ok</button>
					</div>
				</div>
			</form>

		);
	}
}