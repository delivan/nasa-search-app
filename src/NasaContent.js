import React from 'react';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';

const NasaContent = ({imgPath, title, center, date}) => {
	return (
		<div className="Nasa-content">
		  <div className="Nasa-content-rows">
			<NasaImg imgPath={imgPath} title={title}/>
		  </div>
		  <div className="Nasa-rontent-rows">
			<b>Title</b>:
			<LinesEllipsis
            	text={title}
            	maxLine='3'
            	ellipsis='...'
                trimRight
                basedOn='letters'
            />
			<b>Center</b>: {center}<br />
			<b>Date</b>: {date}<br />
		  </div>
		</div>
	);
}

const NasaImg = ({imgPath, title}) => {
  return (
	<img className="Nasa-img" src={imgPath} alt={title} />
  )
}

NasaContent.propTypes = {
    imgPath: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    center: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
}

NasaImg.propTypes = {
    imgPath: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default NasaContent;