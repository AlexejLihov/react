import React from 'react';
import More from '../../more.png';

class PickerMenuButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	};

	handleClick(e) {
		this.props.onClick();
	}

	render() {
		return (
			<button onClick={this.handleClick.bind(this)} className="picker-menu-button">
				<img src={More}></img>
			</button>
		)
	}
}
export default PickerMenuButton;