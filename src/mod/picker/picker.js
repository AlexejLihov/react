import React from 'react';
import PickerItem from './pickerItem';

class Picker extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activeItem: 0
		};
	};

	onMenuClick() {
		this.props.onMenuClick();
	};

	onPickerItemClick(i) {
		this.props.onPickerItemClick(i);
	};

	render() {
		const pickItems = this.props.data.map((item) =>
			<PickerItem key={item.id}
			            item={item}
			            onMenuClick={this.onMenuClick.bind(this)}
			            onPickerItemClick={this.onPickerItemClick.bind(this)}
			            activePickerItem={this.props.activePickerItem}/>
		);
		return (
			<div className="picker">
				{pickItems}
			</div>
		);
	}
}
export default Picker;