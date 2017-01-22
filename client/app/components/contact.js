import React from 'react'
// import {setUser} from "../actions/dummy_actions.js"

const Contact = React.createClass({
	// componentDidMount () {
	// 	console.log(this.props, this.state, "dummycomp mount")
	// 	this.props.dispatch(setUser('someone'))
	// },
	render() {
		// console.log(this.props, this.state, "dummycomp")
		return (
			<div>
				<h1>Contact</h1>
				isaacxpreston@gmail.com
				github.com/isaacxpreston
				linkedin.com/in/isaacxpreston
				twitter.com/isaacxpreston
			</div>
		)
	}
})

export default Contact;