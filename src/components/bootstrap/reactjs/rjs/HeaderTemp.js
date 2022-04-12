import React, { Component } from 'react';

//Bootstrap Style
import '../css/bootstrap.css';
import '../css/bootstrap-utilities.css';
import '../css/bootstrap-grid.css';
import '../css/bootstrap-reboot.css';
import '../css/bootstrap-icons.css';
import '../css/bootstrap-glyphicons.css';
import '../css/custom.css'

export default class HeaderTemp extends Component{

    render(){
        return(
            <header id='header'>
		        <div className='header-content'>
			        <div className='header-content-inner'>
				        <div className='h4'>{this.props.headerText}</div>
			        </div>
		        </div>
	        </header>
        );
    }
}