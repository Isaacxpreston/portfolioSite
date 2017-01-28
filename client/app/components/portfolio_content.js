import React from 'react'

const Content = React.createClass({

  navToLink (url) {
    window.location.replace(url);
  },

	render () {
    const project = this.props.myProjects.filter((project) => {
      return project.name === this.props.content
    })[0]
    if (project) {
      return (
        <div className="portfolio-content">
          <h1>{this.props.content}</h1>
          <p onClick={this.navToLink.bind(this, project.url)}>Demo</p>
          <p>Github</p>
          <p>{project.date}</p>
          <p>{project.description}</p>
          <p>{project.tech}</p>
        </div>
      )
    } else {
      return null
    }

	}
})

export default Content;