import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RaisedButton from 'material-ui/RaisedButton';
import {
	Table,
	TableBody,
	TableHeader,
	TableHeaderColumn,
	TableRow,
	TableRowColumn,
} from 'material-ui/Table';
import PropTypes from 'prop-types';

const style_button = {
	margin: 20,
};

class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{
					model: 'suzuki',
					color: 'blue',
					year: 2012
				},
				{
					model: 'fiat',
					color: 'green',
					year: 2022
				},
				{
					model: 'honda',
					color: 'silver',
					year: 1999
				}
			]
		};
	}

	renderRows(){
		return this.state.data.map(row => {
			return <TableRow>
				<TableRowColumn>{row.model}</TableRowColumn>
				<TableRowColumn>{row.color}</TableRowColumn>
				<TableRowColumn>{row.year}</TableRowColumn>
			</TableRow>
		});
	}

	addRow(){
		this.setState({
			data: this.state.data.push({model: 'dhashjui',color: 'random',year: 1893})
		});
	}


	render(){
		return(
			<MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
				<div>
				<Table>
					<TableHeader displaySelectAll={false} adjustForCheckbox={false}>
						<TableRow>
							<TableHeaderColumn>MODEL</TableHeaderColumn>
							<TableHeaderColumn>COLOR</TableHeaderColumn>
							<TableHeaderColumn>YEAR</TableHeaderColumn>
						</TableRow>
					</TableHeader>
					<TableBody displayRowCheckbox={false}>
						{this.renderRows()}
					</TableBody>
				</Table>
				<RaisedButton label="ADD content" style ={style_button} onClick={()=>this.addRow()} />
					</div>
			</MuiThemeProvider>
		);
	}
}


// Main.propTypes = {
// 	data.name: PropTypes.arrayOf(PropTypes.string),
// 	data.color: PropTypes.arrayOf(PropTypes.string),
// 	data.year: PropTypes.arrayOf(PropTypes.number)
// };

Main.defualtProps = {
	name: 'Name not specified',
	color: 'Color not specified',
	year: 9999
};
export default Main;
