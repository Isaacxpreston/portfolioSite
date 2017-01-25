import React from 'react'
import {Link, browserHistory} from 'react-router'
import {connect} from 'react-redux'
import {toggleNavBar} from '../actions/visibility_actions.js'
import NavBar from './navbar.js'
import Menu from './menu.js'

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
			<img src={require('../stylesheets/images/my_portfolio.png')} />
			<br />
			<img src={require('../stylesheets/images/about_me.png')} />
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