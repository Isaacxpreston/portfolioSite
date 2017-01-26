import React from 'react'
import {menuToggle} from '../actions/menu_actions.js'

const Menu = React.createClass({
	menuToggle () {
		this.props.dispatch(menuToggle())
	},

	render() {
		return (
			<div>
				<div className={this.props.menuReducer.popup}></div>
				<div className="linkedIn"></div>
				<div className="menu">
					<div className="menu-center"></div>
					<div className="menu-right"></div>
					<div className={this.props.menuReducer.menu_left} onClick={this.menuToggle}></div>
				</div>
			</div>
		)
	}
})

export default Menu;