import React from 'react'
import {Link, browserHistory} from 'react-router'
import {connect} from 'react-redux'
import Menu from './menu.js'
import Portfolio from './portfolio.js'
import AboutMe from './about_me.js'
import Landing from './landing.js'
import Draggable from 'react-draggable';
import {DraggableCore} from 'react-draggable';
import {myPortfolioClicked, aboutMeClicked, clickedAway} from '../actions/icons_actions.js'
import {portfolioIconClicked, aboutMeIconClicked} from '../actions/window_actions.js'
import {menuClickedAway} from '../actions/menu_actions.js'
import {portfolioTop, aboutMeTop} from '../actions/top_actions.js'

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
			//put hidden div with pressed 'x' graphic
			//on mouse down, dispatch something to make 'x' pressed visible
			//on mouse up, dispatch something to hide div and hide 'x' pressed image
		//add thumbnails and descriptions for projects
		//clean up graphics

		return (
			<div>
				<div className="background" onClick={this.clickedAway}></div>

				<Landing {...this.props} />
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
		topReducer: state.topReducer,
		landingReducer: state.landingReducer,
		xButtonReducer: state.xButtonReducer
	}
}

const MainWrapper = connect(mapStatetoProps)(Main);

export default MainWrapper;