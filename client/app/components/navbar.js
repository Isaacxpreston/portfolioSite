import React from 'react'
import {Link} from 'react-router'

const NavBar = React.createClass({
	render() {
		if (!this.props.visibility.navbar) {
			return null
		}

		return (
			<div className="navBar">
				<div>
				<Link to="/projects">-Recent Work</Link>
				<br />
				<Link to="/about">-About</Link>
				<br />
				<Link to="/contact">-Contact</Link>
				<br />
				</div>
			</div>
		)
	}
})

export default NavBar;