import React from 'react'
import {Link} from 'react-router'
import NavButton from './navButton.js'

const NavBar = React.createClass({

	// componentWillMount () {
	// 	this.setState({navClass: "NavBar"})
	// },

	// toggleNavClass () {
	// 	if(this.state.navClass === "NavBar") {
	// 		this.setState({navClass: "NavBar NavBarHidden"})
	// 	} else {
	// 		this.setState({navClass: "NavBar"})
	// 	}
	// 	//todo --change to dispatch to change content and navbar simultaneously
	// },

	render() {
		// setTimeout(() => {
		// 	this.toggleNavClass()
		// }, 3000)

		// if (!this.props.visibility.navbar) {
		// 	return null
		// }
		// <div className={this.state.navClass} onClick={this.toggleNavClass}>
		return (
			<div className={this.props.className}>
				<NavButton url="/projects" title="recent work" />
				<NavButton url="/about" title="about me" />
				<NavButton url="/contact" title="contact" />
			</div>
		)
	}
})

export default NavBar;