import React from 'react'
import Simple from './3dTest.js'

const SingleProject = React.createClass({
	render() {
		return (
			<div className="project">
				<h1>{this.props.details.name}</h1>
				<div className="projectThumb">
					<img src="*" alt="A THUMBNAIL OF THE PROJECT" />
				</div>
				<div className="projectText">
					<p>{this.props.details.url}</p>
					<p>{this.props.details.description}</p>
				</div>
			</div>
		)
	}
})

export default SingleProject;