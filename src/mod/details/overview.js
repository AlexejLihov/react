import React from 'react';
import TextItem from './textItem';
import Category from './category';

class Overview extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	};

	render() {
		let data = this.props.data;
		return (
			<Category activeCategory={this.props.activeCategory} name={this.props.name}>
				<TextItem class="condition" label="Condition" value={data && data.condition? data.condition: ""}/>
				<TextItem class="full-details" label="Details" value={data && data.story? data.story: ""}/>
			</Category>
		);
	}
}
export default Overview;