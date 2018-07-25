import React, { Component, Fragment } from 'react';
import NasaContent from './NasaContent';
import PropTypes from 'prop-types';

import './NasaList.css';

class NasaList extends Component {

	// _loadMoreData = () => {
	// 	if(this.state.loadingState){
	// 		return;
	// 	}
	// 	this.setState({ loadingState: true });
	// 	setTimeout(() => {
	// 	  this.setState({ loadingLength: this.state.loadingLength + 10, loadingState: false });
	// 	}, 1000);
	// }
		
	// _loadData = () => {
	// 	return (
	// 		this.props.datas.map(data => {
	// 			return (
	// 				<NasaContent 
	// 					key={data.data[0].nasa_id} 
	// 					imgPath={data.links[0].href}
	// 					title={data.data[0].title}
	// 					center={data.data[0].center}
	// 					date={data.data[0].date_created}
	// 				/>	
	// 			)
	// 		})
	// 	)
	// }
		
	render() {
		return (
			<Fragment>
				<h1 id="Nasa-param">{this.props.param}</h1>
				{this.props.datas.map(data => {
					return (
						<NasaContent 
							key={data.data[0].nasa_id} 
							imgPath={data.links[0].href}
							title={data.data[0].title}
							center={data.data[0].center}
							date={data.data[0].date_created}
						/>	
					)
				})}
			</Fragment>
		);
	}
}

NasaList.propTypes = {
    param: PropTypes.string.isRequired,
    datas: PropTypes.array.isRequired
}

export default NasaList;