import React from 'react'
import {browserHistory} from 'react-router'

const Landing = React.createClass({
  redirect () {
		browserHistory.push('/projects')
  },

	componentDidMount () {
		setTimeout(() => {
			this.redirect()
		}, 2000)
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
			<div>
				<h1>{landingText()}</h1>
			</div>
		)
	}
})

export default Landing;