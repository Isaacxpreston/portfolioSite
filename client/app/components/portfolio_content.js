import React from 'react'

const Content = React.createClass({
	render() {
    const project = this.props.myProjects.filter((project) => {
      return project.name === this.props.content
    })[0]
    if (project) {
      return (
        <div className="portfolio-content">
          <h1>{this.props.content}</h1>
          <p>{project.name}</p>
          <p>{project.date}</p>
          <p>{project.url}</p>
          <p>{project.description}</p>
        </div>
      )
    } else {
      return null
    }

	}
})

export default Content;