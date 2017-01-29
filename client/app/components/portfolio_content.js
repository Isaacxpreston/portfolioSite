import React from 'react'

const Content = React.createClass({

  navToLink (url) {
    window.location.replace(url);
    //try .href instead of .replace
  },

	render () {
    const project = this.props.myProjects.filter((project) => {
      return project.name === this.props.content
    })[0]
    if (project) {
      return (
        <div className="portfolio-content">
          <h1><b>{this.props.content}</b></h1>
          <h3>Demo</h3>
          <h3>Github</h3>
          <p>{project.description}</p>
          <p>Tech stack: {project.tech}</p>
          <h1>Screenshots</h1>
          <p>something something here yeah</p>
        </div>
      )
    } else {
      return null
    }

	}
})

export default Content;