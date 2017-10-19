import React from 'react';
import PickerMenuButton from './pickerMenuButton';

class Picker extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: props.item.name,
			summary: props.item.summary,
			face: props.item.face,
			id: props.item.id
		};
	};

	onMenuClick() {
		this.props.onMenuClick();
	};

	onItemClick() {
		this.props.onPickerItemClick(this.state.id);
	};

	render() {
		return (
			<div  onClick={this.onItemClick.bind(this)} className={this.props.activePickerItem === this.state.id? "picker-item active": "picker-item"}>
				<div className="image-container">
					<img className="face" src={this.state.face}/>
				</div>
				<div className="picker-details-container">
					<div className="name">{this.state.name}</div>
					<div className="summary">{this.state.summary}</div>
				</div>
				<PickerMenuButton onClick={this.onMenuClick.bind(this)}/>
			</div>
		);
	}
}
export default Picker;