import React from 'react'

const Content = React.createClass({

	navToLink (url) {
    window.location.href = url;
  },


	render () {
    const project = this.props.myProjects.filter((project) => {
      return project.name === this.props.content
    })[0]

    const githubLink = () => {
      if(project.github !== "") {
        return (
          <div
            className="project-link"
            onClick={this.navToLink.bind(this, project.github)}
          >
          Github
          </div>
        )
      } else {
        return null
      }
    }

    const demoLink = () => {
      if(project.demo !== "") {
        return (
          <div
            className="project-link"
            onClick={this.navToLink.bind(this, project.demo)}
          >
          Demo
          </div>
        )
      } else {
        return null
      }
    }

    if (project) {
      return (
        <div className="portfolio-content">
          <div className="project-header">{this.props.content}</div>
          {demoLink()}
          {githubLink()}
          <div className="about-project">
            <p>{project.description}</p>
            <p>Tech stack: {project.tech}</p>
          </div>
          <div className="project-subheader">Screenshots</div>
          <p>something something here yeah</p>
        </div>
      )
    } else {
      return null
    }

	}
})

export default Content;