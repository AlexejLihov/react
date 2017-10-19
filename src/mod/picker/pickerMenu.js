import React from 'react';

class PickerMenu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	};

	closeMenu() {
		this.props.onMenuCloseClick();
	}

	render() {

		return (
			this.props.isMenuOpen &&
			<div className="picker-menu">
				<div>delete</div>
				<div onClick={this.closeMenu.bind(this)}>close</div>
			</div>
		)
	}
}
export default PickerMenu;