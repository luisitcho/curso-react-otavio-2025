import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

export default class App extends Component {

	state = {
		name: 'Luis Henrique',
		counter: 0
	}

	handlePClicked = () => {
		this.setState({ name: 'Peppa' });
	}

	handleAClicked = (event) => {
		event.preventDefault();
		const { counter } = this.state;
		this.setState({ counter: counter + 1 });
	}
	render() { 
		const { name, counter } = this.state;
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p onClick={this.handlePClicked}>
						{name}
					</p>
					<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" onClick={this.handleAClicked}>
						Learn React
					</a>
					<p className="counter">{counter}</p>
				</header>
			</div>
		);
	}
}
// export default App;
