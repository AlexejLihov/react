import React from 'react';

class CategorySelector extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	};

	onItemClick(item) {
		this.props.onCategoryClick(item.target.getAttribute("name"));
	};

	render() {
		const categories = [
			{text: "overview", name: "overview"},
			{text: "data", name: "personalData"},
			{text: "messages", name: "messages"},
			{text: "notes", name: "notes"}
		].map((item) =>
			<div className="select-container" key={item.name} ><div key={item.name} name={item.name} onClick={this.onItemClick.bind(this)} className={this.props.activeCategory === item.name? "category-select active": "category-select"}>{item.text}</div></div>
		);

		return (
			<div className="category-selector">
				{categories}
			</div>
		);
	}
}
export default CategorySelector;