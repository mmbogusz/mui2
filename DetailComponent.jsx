import React from 'react';
import PropTypes from 'prop-types';

class DetailComponent extends React.Component {

	constructor(props) {
		super(props);

	}

	render(){
		return(
				<div>
					{JSON.stringify(this.props.row)}
				</div>
		);
	}
}


export default DetailComponent;
