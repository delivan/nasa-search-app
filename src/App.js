import React, { Component } from 'react';
import NasaList from './NasaList';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
	state = {
		
	}

	componentDidMount = () => {
		this._getNasaData();
	}

	_getNasaData = async () => {
		let param = document.getElementById('search-input').value;
		if (param === '') {
			param = "seoul";
		}
		const nasaData = await this._callApi(param);
		const datas = nasaData.map(data => {
			return data;
		});
		this.setState({
			datas, 
			param
		});
		
	}
	
	_callApi = (param) => {
		return axios.get("https://images-api.nasa.gov/search?q=" + param)
		.then(response =>  response.data.collection.items)
		.catch(err => console.log(err));
		// return fetch("https://images-api.nasa.gov/search?q=" + param)
		// .then(response =>  response.json())
		// .then(json => json.collection.items)
		// .catch(err => console.log(err));
	}
	
    render() {
		const { datas, param } = this.state;
		return (
		  <div className="App">
			<header className="App-header">
				<h1 className="App-title">Welcome to Nasa Data Search App</h1>
				<div className="search-container">
					<input id="search-input" type="text" placeholder="Search for...(e.g. seoul)" />
					<button id="search-button" onClick={this._getNasaData}>Search</button>
				</div>
			</header>
			<div className="App-content">
				{ datas ? <NasaList datas={datas} param={param}/> : 'Please wait..'}
			</div>
		  </div>
		);
  }
}

export default App;
