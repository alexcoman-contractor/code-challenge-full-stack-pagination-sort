import React, {Component} from 'react';

class Item extends Component {
	render() {
		return (
			<tr>
				<td>{this.props.item.name}</td>
				<td>{this.props.item.birth}</td>
			</tr>
		);
	}
}

export default Item;
