import React, { Component } from 'react';

class Scroll extends Component {
  state = {
    data: [],
    requestSent: false
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this._handleOnScroll);
   
    this._initFakeData();
  }

  // componentWillUnMount = () => {
  //   window.removeEventListener('scroll', this._handleOnScroll);
  // }

  _handleOnScroll = () => {
    // document.documentElement.scrollTop: scoll할 수 있는 높이 중에서 가장 위의 위치
    // document.documentElement.scrollHeight: scoll할 수 있는 총 길이 + 보여지는 화면의 높이 
    // document.documentElement.clientHeight, window.innerHeight: 보여지는 화면의 높이
    const scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
    const scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
    const clientHeight = document.documentElement.clientHeight || window.innerHeight;
    const scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;
    
    if (scrolledToBottom) {
      this._querySearchResult();
    }
  }

  _querySearchResult = () => {
    if (this.state.requestSent) {
      return;
    }

    // enumerate a slow query
    setTimeout(this._doQuery, 1000);

    this.setState({requestSent: true});
  }

  _doQuery = () => {
      var url = "#"
      var httpRequest;    
      if (window.XMLHttpRequest) { // Mozilla, Safari, ...
        httpRequest = new XMLHttpRequest();
      }
      if (!httpRequest) {
        alert('Giving up :( Cannot create an XMLHTTP instance');
        return false;
      }
      httpRequest.onreadystatechange = () => {
        if (httpRequest.readyState === 4) {
          if (httpRequest.status === 200) {
            const fakeData = this._createFakeData(this.state.data.length, 20);
            const newData = this.state.data.concat(fakeData);
            this.setState({data: newData, requestSent: false});   
          } else {
            this.setState({requestSent: false});
            alert('There was a problem with the request.');
          }
        }
      }
      httpRequest.open('GET', url);
      httpRequest.send();
    }


  _initFakeData = () => { 
    const data = this._createFakeData(this.state.data.length, 100);
    
    this.setState({data : data});
  }

  _createFakeData = (startKey, counter) => {
    const data = [];
    for (let i = 0; i < counter; i++) {
      let fakeData = (
        <div key={startKey + i} className="data-info">
          Fake Data {startKey + i}
        </div>
      )
      data.push(fakeData);
    }
    
    return data;
  }

  render = () => {
    return (
      <div>
        <div>
          {this.state.data}
        </div>
      </div>
    )
  }
}

export default Scroll;