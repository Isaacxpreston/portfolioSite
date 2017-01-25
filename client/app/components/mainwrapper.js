import React from 'react'
import {Link, browserHistory} from 'react-router'
import {connect} from 'react-redux'
import {toggleNavBar} from '../actions/visibility_actions.js'
import NavBar from './navbar.js'
import Menu from './menu.js'

import Draggable from 'react-draggable'; // The default 
import {DraggableCore} from 'react-draggable'; // <DraggableCore>

// const Main = React.createClass({
// 	render() {
// 		return (
// 			<div className={this.props.visibility.mainClass}>
// 				<h1>Isaac Preston</h1>
// 				<NavBar className={this.props.visibility.navBarClass} {...this.props} />
// 				<div className="toggleBar" onClick={() => {this.props.dispatch(toggleNavBar())}}></div>
// 				<div className={this.props.visibility.contentClass}>
// 					{ React.cloneElement(this.props.children, this.props) }
// 				</div>
// 			</div>
// 		)
// 	}
// })

const Main = React.createClass({
	render() {
		return (
			<div>
				<Draggable axis="both" handle=".handle">
					<div className="portfolio handle"></div>
				</Draggable>
				<Draggable axis="both" handle=".handle">
					<div className="handle">
						<img src={require('../stylesheets/images/my_portfolio.png')} />
					</div>
				</Draggable>
				<br />
				<img src={require('../stylesheets/images/about_me.png')} />
				<br />
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
		myProjects: state.myProjects
	}
}

const MainWrapper = connect(mapStatetoProps)(Main);

export default MainWrapper;