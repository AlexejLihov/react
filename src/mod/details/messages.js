import React from 'react';
import TextItem from './textItem';
import Category from './category';
import Messaging from '../../fdata/messaging.json';

class Messages extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	};

	render() {
		let data = this.props.data;
		let messagingData = data? Messaging[data.id]: null;
		return (
			<Category activeCategory={this.props.activeCategory} name={this.props.name}>
				<TextItem className="messages-today" label="Messages today" value={messagingData? messagingData.today: ""}/>
				<TextItem className="messages-total" label="Messages total" value={messagingData? messagingData.total: ""}/>
			</Category>
		);
	}
}
export default Messages;