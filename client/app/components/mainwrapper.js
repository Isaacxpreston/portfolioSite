import React from 'react'
import {Link, browserHistory} from 'react-router'
import {connect} from 'react-redux'
import Menu from './menu.js'
import Draggable from 'react-draggable';
import {DraggableCore} from 'react-draggable';
import {myPortfolioClicked, aboutMeClicked, clickedAway} from '../actions/icons_actions.js'

const Main = React.createClass({

	clickedAway () {
		this.props.dispatch(clickedAway())
	},

	myPortfolioClicked () {
		this.props.dispatch(myPortfolioClicked())
	},

	aboutMeClicked () {
		this.props.dispatch(aboutMeClicked())
	},

	render() { //todo- move portfolio to external component
		return (
			<div>

				<div className="background" onClick={this.clickedAway}></div>
				
				<Draggable axis="both" handle=".handle">
					<div className="portfolio handle">
						<div className="alike-me-folder"></div>
					</div>
				</Draggable>

				<Draggable axis="both" handle=".handle" onMouseDown={this.myPortfolioClicked}>
					<div className={this.props.iconsReducer.my_portfolio}>
					</div>
				</Draggable>

				<br />

				<Draggable axis="both" handle=".handle" onMouseDown={this.aboutMeClicked}>
					<div className={this.props.iconsReducer.about_me}>
					</div>
				</Draggable>

			<Menu />
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
		iconsReducer: state.iconsReducer
	}
}

const MainWrapper = connect(mapStatetoProps)(Main);

export default MainWrapper;