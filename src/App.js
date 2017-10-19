import React, {Component} from 'react';
import Main from './mod/main';
import './App.css';

class App extends Component {
	render() {

		return (
			<div className="app">
				<div className="app-header"/>
				<Main className="app-data"/>
				<div className="app-footer"/>
			</div>
		);
	}
}

export default App;
