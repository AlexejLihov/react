import React from 'react';
import CategorySelector from './categorySelector';
import Overview from './overview';
import PersonalData from './personalData';
import Messages from './messages';
import Notes from './notes';

class DetailsSecondary extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activeCategory: "overview"
		};
	};

	onCategoryClick(category) {
		this.setState({activeCategory: category});
	};

	onNoteChange(text) {
		console.log(text);
	}

	render() {
		return (
			<div className="details-secondary">
				<CategorySelector activeCategory={this.state.activeCategory} onCategoryClick={this.onCategoryClick.bind(this)}/>
				<div className="category-content">
					<Overview name="overview" data={this.props.itemData} activeCategory={this.state.activeCategory}/>
					<PersonalData name="personalData" data={this.props.itemData} activeCategory={this.state.activeCategory}/>
					<Messages name="messages" data={this.props.itemData} activeCategory={this.state.activeCategory}/>
					<Notes onNoteChange={this.onNoteChange.bind(this)} name="notes" data={this.props.itemData} activeCategory={this.state.activeCategory}/>
				</div>
			</div>
		);
	}
}
export default DetailsSecondary;