import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
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

		const TableExampleSimple = () => (
			<MuiThemeProvider>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHeaderColumn>MODEL</TableHeaderColumn>
							<TableHeaderColumn>COLOR</TableHeaderColumn>
							<TableHeaderColumn>YEAR</TableHeaderColumn>
							<TableHeaderColumn>MILAGE</TableHeaderColumn>
						</TableRow>
					</TableHeader>
					<TableBody>
						<TableRow>
							<TableRowColumn>{model}</TableRowColumn>
							<TableRowColumn>{color}</TableRowColumn>
							<TableRowColumn>{year}</TableRowColumn>
							<TableHeaderColumn>{milage}</TableHeaderColumn>
						</TableRow>
						<TableRow>
							<TableRowColumn>{model}</TableRowColumn>
							<TableRowColumn>{color}</TableRowColumn>
							<TableRowColumn>{year}</TableRowColumn>
							<TableHeaderColumn>{milage}</TableHeaderColumn>
						</TableRow>
					</TableBody>
				</Table>
			</MuiThemeProvider>
		);
	};
}


export default Main;
