import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Main from './main';

injectTapEventPlugin();

ReactDOM.render(<Main model="suzuki" color="green" year="1988" />, document.getElementById("app"));


