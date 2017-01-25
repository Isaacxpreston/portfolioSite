import React from 'react'
import {browserHistory} from 'react-router'
import {setVisibilityHidden, setVisibility, showNavBar, hideNavBar} from "../actions/visibility_actions.js"


const Landing = React.createClass({
  redirect () {
		// setTimeout(() => {
		// 	this.props.dispatch(setVisibilityHidden())
		// }, 1000)
  	// setTimeout(() => {
		// 	this.props.dispatch(showNavBar())
		// 	this.props.dispatch(setVisibility())
    //   browserHistory.push('/projects')
    // }, 2000)
		browserHistory.push('/projects')
  },

	componentDidMount () {
		// this.props.dispatch(hideNavBar())
		this.redirect()
	},

	render() {
		const landingText = () => {
			if(!this.props.params.splat) {
				return "LANDING"
			} else {
				return "NOT A URL IDIOT"
			}
		}
		return (
			<div className={this.props.visibility.class}>
				<h1>{landingText()}</h1>
			</div>
		)
	}
})

export default Landing;