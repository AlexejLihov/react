import React from 'react';
import Picker from './picker/picker';
import Details from './details/details';
import PickerMenu from "./picker/pickerMenu";
import Suspects from '.././fdata/suspects';

class Main extends React.Component {
	constructor(props) {
		super(props);
			this.state = {
				isPickerMenuOpen: false,
				activePickerItem: 0,
				activeItemData: false
		};
	};

	onPickerMenuClick() {
		this.setState({isPickerMenuOpen: true});
	};

	onMenuCloseClick() {
		this.setState({isPickerMenuOpen: false});
	};

	onPickerItemClick(item) {
		this.setState({activePickerItem: item});
		let itemData = Suspects.find((i) => {return i.id === item});
		this.setState({activeItemData: itemData});
	};

	render() {
		return (
			<div className="main-view">
				<Picker data={Suspects} onMenuClick={this.onPickerMenuClick.bind(this)} onPickerItemClick={this.onPickerItemClick.bind(this)} activePickerItem={this.state.activePickerItem}/>
				<Details activeItemData={this.state.activeItemData}/>
				<PickerMenu isMenuOpen={this.state.isPickerMenuOpen} onMenuCloseClick={this.onMenuCloseClick.bind(this)}/>
			</div>
		);
	}
}
export default Main;