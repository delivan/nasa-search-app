import React, { Component } from 'react';
import NasaContent from './NasaContent';
import PropTypes from 'prop-types';

class NasaList extends Component {
	render() {
		return (
			<div className="row">
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
			</div>
		);
	}
}

NasaList.propTypes = {
    param: PropTypes.string.isRequired,
    datas: PropTypes.array.isRequired
}

export default NasaList;