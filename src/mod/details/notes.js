import React from 'react';
import Category from './category';

class Notes extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	};

	handleChange(e) {
		this.props.onNoteChange(e.target.value);
	};

	render() {
		let data = this.props.data;

		return (
			<Category activeCategory={this.props.activeCategory} name={this.props.name}>
				<textarea className="value" onChange={this.handleChange.bind(this)}></textarea>
			</Category>
		);
	}
}
export default Notes;
