import React from 'react'
import {Link, browserHistory} from 'react-router'
import {connect} from 'react-redux'
import Menu from './menu.js'
import Portfolio from './portfolio.js'
import AboutMe from './about_me.js'
import Draggable from 'react-draggable';
import {DraggableCore} from 'react-draggable';
import {myPortfolioClicked, aboutMeClicked, clickedAway} from '../actions/icons_actions.js'
import {portfolioIconClicked, aboutMeIconClicked} from '../actions/window_actions.js'
import {menuClickedAway} from '../actions/menu_actions.js'
import {portfolioTop, aboutMeTop} from '../actions/top_actions.js'
import '../stylesheets/windows_styles.scss'

const Main = React.createClass({

	clickedAway () {
		this.props.dispatch(clickedAway())
		this.props.dispatch(menuClickedAway())
	},

	menuClickedAway () {
		this.props.dispatch(menuClickedAway())
	},

	myPortfolioClicked () {
		this.props.dispatch(myPortfolioClicked())
	},

	aboutMeClicked () {
		this.props.dispatch(aboutMeClicked())
	},

	aboutMeIconClicked () {
		this.props.dispatch(aboutMeIconClicked())
		this.props.dispatch(aboutMeTop())
	},

	portfolioIconClicked () {
		this.props.dispatch(portfolioIconClicked())
		this.props.dispatch(portfolioTop())
	},

	render() {
		//TODO
		//make divs closeable
		//make a css loader bar thing for the alike me thumbnail
		//make some 3d sound bars for the songspace thumbnail
		//make a landing page

		return (
			<div>
				<div className="background" onClick={this.clickedAway}></div>

				<Portfolio {...this.props} />
				<AboutMe {...this.props} />

				<Draggable axis="both" handle=".handle" onMouseDown={this.myPortfolioClicked}>
					<div 
						className={this.props.iconsReducer.my_portfolio}
						onClick={this.menuClickedAway}
						onDoubleClick={this.portfolioIconClicked}>
					</div>
				</Draggable>

				<br />

				<Draggable axis="both" handle=".handle" onMouseDown={this.aboutMeClicked}>
					<div
						className={this.props.iconsReducer.about_me}
						onClick={this.menuClickedAway}
						onDoubleClick={this.aboutMeIconClicked}
					>
					</div>
				</Draggable>

				<Menu {...this.props} />
			</div>
		)
	}
})

function mapStatetoProps (state=[]) {
	return {
		dummy: state.dummy,
		user: state.user,
		visibility: state.visibility,
		displaySize: state.displaySize,
		myProjects: state.myProjects,
		iconsReducer: state.iconsReducer,
		portfolioIconsReducer: state.portfolioIconsReducer,
		windowReducer: state.windowReducer,
		menuReducer: state.menuReducer,
		topReducer: state.topReducer
	}
}

const MainWrapper = connect(mapStatetoProps)(Main);

export default MainWrapper;