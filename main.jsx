import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
	Table,
	TableBody,
	TableHeader,
	TableHeaderColumn,
	TableRow,
	TableRowColumn,
} from 'material-ui/Table';


class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			milage: 10000
		};
	}
	render(){
		let {model, color, year} = this.props;
		let {milage} =this.state;

		return(
			<MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
				<Table>
					<TableHeader displaySelectAll={false} adjustForCheckbox={false}>
						<TableRow>
							<TableHeaderColumn>MODEL</TableHeaderColumn>
							<TableHeaderColumn>COLOR</TableHeaderColumn>
							<TableHeaderColumn>YEAR</TableHeaderColumn>
							<TableHeaderColumn>MILAGE</TableHeaderColumn>
						</TableRow>
					</TableHeader>
					<TableBody displayRowCheckbox={false}>
						<TableRow>
							<TableRowColumn>{model}</TableRowColumn>
							<TableRowColumn>{color}</TableRowColumn>
							<TableRowColumn>{year}</TableRowColumn>
							<TableRowColumn>{milage}</TableRowColumn>
						</TableRow>
						<TableRow>
							<TableRowColumn>{model}</TableRowColumn>
							<TableRowColumn>{color}</TableRowColumn>
							<TableRowColumn>{year}</TableRowColumn>
							<TableRowColumn>{milage}</TableRowColumn>
						</TableRow>
						<TableRow>
							<TableRowColumn>{model}</TableRowColumn>
							<TableRowColumn>{color}</TableRowColumn>
							<TableRowColumn>{year}</TableRowColumn>
							<TableRowColumn>{milage}</TableRowColumn>
						</TableRow>
					</TableBody>
				</Table>
			</MuiThemeProvider>
		);
	};
}


export default Main;
