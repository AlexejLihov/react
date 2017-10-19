import React from 'react';

class Category extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: this.props.name
		};
	};

	render() {
		return (
			<div className={this.props.name + " " + (this.props.activeCategory === this.state.name? "category": "category category-inactive")}>
				{this.props.children}
			</div>
		);
	}
}
export default Category;