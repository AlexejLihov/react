import React from 'react';

class IconItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	};

	render() {
		return (
			<div className="icon-item">
				<img className="label" src={this.props.label}/>
				<span className="value">{this.props.value}</span>
			</div>
		);
	}
}
export default IconItem;