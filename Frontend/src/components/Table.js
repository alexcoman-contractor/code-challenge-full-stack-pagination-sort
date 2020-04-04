import React, { Component } from 'react'
import { PropTypes }        from 'prop-types'
import Item                 from './Item'

class Table extends Component {
	constructor () {
		super()
		this.people = [
			{
				name: 'John Sina',
				birth: '11/30/2011'
			}, {
				name: 'Barcy Washington',
				birth: '09/16/1992'
			}, {
				name: 'Peter Parker',
				birth: '01/16/1992'
			}, {
				name: 'Jimmy Shergil',
				birth: '12/12/2001'
			}, {
				name: 'Alexander Alfred',
				birth: '02/09/1891'
			}, {
				name: 'Krishna Gupta',
				birth: '12/01/1982'
			}, {
				name: 'Sania Mirza',
				birth: '11/30/2011'
			}, {
				name: 'Lata Pathak',
				birth: '10/31/1999'
			}
		]
	}

	componentDidUpdate = () => {
		if (this.props.parameterState === 'age') {
			this.compareDates()
		} else {
			this.compareNames()
		}
	}

	compareDates = () => {
		this.people.sort((a,b) => {
			return a.birth > b.birth ? 1 : -1
		})
	}

	compareNames = () => {
		this.people.sort((a,b) => {
			return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
		})
	}

	render () {
		return (
			<div className='table-div'>
				<table className='table table-striped table-bordered table-hover full-width'>
					<thead>
						<tr>
							<th className='course-name'>Person Name</th>
							<th className='duration'>Date of Birth</th>
						</tr>
					</thead>
					<tbody>
						{this.people.map((item, key) =>
							<Item item={item} key={key} />
						)}
					</tbody>
				</table>
			</div>
		)

	}
}

// Uncomment the snippet below
// Table.propTypes = {
// 	sortParameter: PropTypes.string
// }

export default Table
