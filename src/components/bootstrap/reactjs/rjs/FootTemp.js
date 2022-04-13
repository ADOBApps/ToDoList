/**
 * @author Acxel Orozco <acxelorozco@gmail.com>
 * @description Bootstrap module to add foot pages section
*/
import React, { Component } from 'react';

//Bootstrap Style
import '../css/bootstrap.css';
import '../css/bootstrap-utilities.css';
import '../css/bootstrap-grid.css';
import '../css/bootstrap-reboot.css';
import '../css/bootstrap-icons.css';
import '../css/bootstrap-glyphicons.css';
import '../css/custom.css'

export default class FootTemp extends Component{
	render(){
		return(
			<footer className="page-footer">
				<div className="contact">
					<div className="container">
						<div className="h4 section-heading">{this.props.footTitle}</div>
						<p><span className="glyphicon glyphicon-envelope"></span> {this.props.footEmail} </p>
						<p><span className="bi-cpu"></span> Powered by ADOB Apps</p> 
					</div>
				</div>
				<div className="small-print">
					<div className="container">
						<p>Copyright &copy; ADOB Apps {this.props.footYear}</p>
					</div>
				</div>
			</footer>
		);
	}
}
