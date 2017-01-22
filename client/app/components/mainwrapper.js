import React from 'react'
import {Link, browserHistory} from 'react-router'
import {connect} from 'react-redux'
import {setUser} from '../actions/dummy_actions.js'
import NavBar from'./navbar.js'

const Main = React.createClass({
	render() {
		const toggleClass = () => {
			if (this.props.visibility.navbar) {
				return {
					main: "main visible",
					content: "content",
					header: (<h1>Isaac Preston</h1>)
				} 
			}	else {
				return {
					main: "landing ",
					content: "landing",
					header: null
				}
			}
		}
		return (
			<div className={toggleClass().main}>
				{toggleClass().header}
				<NavBar {...this.props} />
				<div className={toggleClass().content}>
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
		myProjects: state.myProjects
	}
}

const MainWrapper = connect(mapStatetoProps)(Main);

export default MainWrapper;

