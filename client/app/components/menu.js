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
				<div className={this.props.menuReducer.icons}>
					<div className="popup-option linkedIn"></div>
					<div className="popup-option facebook"></div>
					<div className="popup-option github"></div>
					<div className="popup-option twitter"></div>
					<div className="popup-option email"></div>
				</div>

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