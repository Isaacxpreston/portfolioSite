import React from 'react'
import {Link} from 'react-router'
import NavButton from './navButton.js'

const NavBar = React.createClass({
	render() {
		if (!this.props.visibility.navbar) {
			return null
		}

		return (
			<div className="navBar">
				<NavButton url="/projects" title="recent work" />
				<NavButton url="/about" title="about me" />
				<NavButton url="/contact" title="contact" />
			</div>
		)
	}
})

export default NavBar;