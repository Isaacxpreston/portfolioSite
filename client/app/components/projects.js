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
				<div className="pageTitle">
					<h1>Recent Work</h1>
				</div>
				{showProjects()}
			</div>
		)
	}
})

export default Projects;