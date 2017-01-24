import React from 'react'
import SingleProject from './singleProject.js'
// import {setUser} from "../actions/dummy_actions.js"

const Projects = React.createClass({
	render() {
		const showProjects = () => {
			console.log(this.props)
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