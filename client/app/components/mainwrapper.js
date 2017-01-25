import React from 'react'
import {Link, browserHistory} from 'react-router'
import {connect} from 'react-redux'
import {toggleNavBar} from '../actions/visibility_actions.js'
import NavBar from'./navbar.js'

const Main = React.createClass({
	render() {
		// const toggleClass = () => {
		// 	if (this.props.visibility.navbar) {
		// 		return {
		// 			main: "main visible",
		// 			content: "content",
		// 			header: (<h1>Isaac Preston</h1>)
		// 		} 
		// 	}	else {
		// 		return {
		// 			main: "null",
		// 			content: "null",
		// 			header: null
		// 		}
		// 	}
		// }
		// {toggleClass().header}
		console.log("from main because i dont know lifecycle....", this.props, this.state)
		//this.props.visibility.contentClass .mainClass .navBarClas
		return (
			<div className={this.props.visibility.mainClass}>
				<button onClick={() => {this.props.dispatch(toggleNavBar())}}>click me</button>
				<h1>Isaac Preston</h1>
				<NavBar className={this.props.visibility.navBarClass} {...this.props} />
				<div className={this.props.visibility.contentClass}>
					{ React.cloneElement(this.props.children, this.props) }
				</div>
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