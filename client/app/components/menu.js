import React from 'react'
import {menuToggle} from '../actions/menu_actions.js'


const Menu = React.createClass({
	menuToggle () {
		this.props.dispatch(menuToggle())
	},

	navToLink (url) {
    window.location.href = url;
  },

	render() {
		return (
			<div>
				<div className={this.props.menuReducer.popup}></div>
				<div className={this.props.menuReducer.icons}>
					<div
						className="popup-option linkedIn"
						onClick={this.navToLink.bind(this, "https://www.linkedin.com/in/isaacxpreston")}
					></div>
					<div
						className="popup-option facebook"
						onClick={this.navToLink.bind(this, "https://www.facebook.com/supitsisaac")}
					></div>
					<div
						className="popup-option github"
						onClick={this.navToLink.bind(this, "https://github.com/Isaacxpreston")}
					></div>
					<div
						className="popup-option twitter"
						onClick={this.navToLink.bind(this, "https://twitter.com/isaacxpreston")}
					></div>
					<div
						className="popup-option email"
						onClick={this.navToLink.bind(this, "mailto:isaacxpreston@gmail.com")}
					></div> 
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