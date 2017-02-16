import React from 'react'

const styles = {
  img: {
    height: "328px",
    width: "600px"
  }
}

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

    const Screenshots = () => {
      return project.screenshots.map((screenshot) => {
        return (
          <div className="portfolio-image">
            <img src={require("../stylesheets/images/" + screenshot)} style={styles.img} />
          </div>
        )
      })
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
          {Screenshots()}
        </div>
      )
    } else {
      return null
    }

	}
})

export default Content;