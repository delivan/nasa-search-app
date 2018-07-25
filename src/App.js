import React, { Component } from 'react';
import NasaList from './NasaList';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
	state = {
		param: '',
		datas: [],
		currentIndex: 0,
		showingDatas: []
	}

	componentDidMount = () => {
		window.addEventListener('scroll', this._handleOnScroll);

		this._getNasaData();
	}

	_createShowingDatas = () => {
		const { datas, currentIndex } = this.state;
		const showingDatas = datas.slice(currentIndex, currentIndex + 20);
		this.setState({
			currentIndex: currentIndex + 20,
			showingDatas: this.state.showingDatas.concat(showingDatas),
		});
	}


	_handleOnScroll = () => {
    // document.documentElement.scrollTop: scoll할 수 있는 높이 중에서 가장 위의 위치
    // document.documentElement.scrollHeight: scoll할 수 있는 총 길이 + 보여지는 화면의 높이 
    // document.documentElement.clientHeight, window.innerHeight: 보여지는 화면의 높이
    const scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
    const scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
    const clientHeight = document.documentElement.clientHeight || window.innerHeight;
    const scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;
    
    if (scrolledToBottom) {
			this._createShowingDatas();
    }
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
			param,
			datas, 
			currentIndex: 0,
			showingDatas: []
		});
		this._createShowingDatas();
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
		const { showingDatas, param } = this.state;
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
				{ showingDatas ? <NasaList datas={showingDatas} param={param}/> : 'Please wait..'}
			</div>
		  </div>
		);
  }
}

export default App;
