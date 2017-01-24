import React from 'react'
import {browserHistory} from 'react-router'

const NavButton = React.createClass({
	navToLink (url) {
		browserHistory.push(url)
	},
	
	render() {
		return (
			<div className="navButton diagonal" onClick={this.navToLink.bind(this, this.props.url)}>
        <div className="diagonalText">{this.props.title}</div>
			</div>
		)
	}
})

export default NavButton