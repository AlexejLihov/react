import React from 'react';

class TextItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	};

	render() {
		return (
			<div className={this.props.class ? this.props.class + " text-item" : "text-item"}>
				<span className="label">{this.props.label} </span>
				<span className="value">{this.props.value}</span>
			</div>
		);
	}
}
export default TextItem;