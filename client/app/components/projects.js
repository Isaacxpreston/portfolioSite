import React from 'react'
import SingleProject from './singleProject.js'

const Projects = React.createClass({
	render() {
		const showProjects = () => {
			return this.props.myProjects.map((project) => {
				let indexOfProject = this.props.myProjects.indexOf(project)
				return (
					<SingleProject key={indexOfProject} details={project} />
				)
			})
		}
		return (
			<div className="project">
				<h1>Recent Work</h1>
				{showProjects()}
			</div>
		)
	}
})

export default Projects;