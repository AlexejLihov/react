import React from 'react';
import DetailsPrimary from './detailsPrimary';
import DetailsSecondary from './detailsSecondary';

class Details extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	};

	render() {
		return (
			<div className="details">
				<DetailsPrimary itemData={this.props.activeItemData}/>
				<DetailsSecondary itemData={this.props.activeItemData}/>
			</div>
		);
	}
}
export default Details;