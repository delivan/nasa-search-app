import React from 'react';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';

const NasaContent = ({imgPath, title, center, date}) => {
	return (
		<div className="col-md-4">
			<div className="card mb-4 shadow-sm">
				<NasaImg imgPath={imgPath} title={title}/>
				<div className="card-body">
					<b>Title</b>:&nbsp;
					<LinesEllipsis
						className="card-title"
						text={title}
						maxLine='1'
						ellipsis='...'
						trimRight
						basedOn='letters'
					/><br />
					<b>Center</b>: {center}<br />
					<b>Date</b>: {date}<br />
				</div>
			</div>
		</div>
	);
}

const NasaImg = ({imgPath, title}) => {
  return (
	<img className="card-img-top" src={imgPath} alt={title} />
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