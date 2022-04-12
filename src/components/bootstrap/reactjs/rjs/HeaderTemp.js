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

    headerStyle(){
        return{
            backgroundImage: url((this.props.headerImgRUL))
        }
    }

    render(){
        const {header} = this.props;
        return(
            <header id='header' style={headerStyle()}>
		        <div className='header-content'>
			        <div className='header-content-inner'>
				        <div className='h4'>{header.headerText}</div>
			        </div>
		        </div>
	        </header>
        );
    }
}