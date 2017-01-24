import React from 'react'
import {browserHistory} from 'react-router'

const NavButton = React.createClass({
	navToLink (url) {
		browserHistory.push(url)
	},
	
	render() {
		return (
			<div className="navButton" onClick={this.navToLink.bind(this, this.props.url)}>
        {this.props.title}
			</div>
		)
	}
})

export default NavButton