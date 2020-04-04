import React, { Component } from 'react'
import { PropTypes }        from 'prop-types'

class Radio extends Component {
	constructor () {
		super()
		this.state = {
			parameterState: 'name'
		}
	}

	changeToName = () => {
		this.props.parameterState('name')
	}

	changeToAge = () => {
		this.props.parameterState('age')
	}

	render () {
		return (
			<div className='radioButtons'>
				<div className='left'>
					<input type='radio' onClick={this.changeToName} name='sort'/>
					<label>&nbsp;&nbsp;Sort by name</label>
				</div>
				<div className='right'>
					<input type='radio' onClick={this.changeToAge} name='sort'/>
					<label>&nbsp;&nbsp;Sort by age</label>
				</div>
			</div>
		)

	}
}

// Uncomment the snippet below
// Radio.propTypes = {
// 	sortBy: PropTypes.func
// }

export default Radio
