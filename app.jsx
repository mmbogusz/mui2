import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TableExample from './tableExample';

const App = () => (
	<MuiThemeProvider>
		<TableExample />
	</MuiThemeProvider>
);

ReactDOM.render(
	<App />,
	document.getElementById('app')
);
