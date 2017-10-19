import React from 'react';
import Category from './category';

class PersonalData extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	};

	render() {
		let data = this.props.data;
		return (
			<Category activeCategory={this.props.activeCategory} name={this.props.name}>
				<div className="about" >{data && data.about? data.about : "-"}</div>
			</Category>
		);
	}
}
export default PersonalData;