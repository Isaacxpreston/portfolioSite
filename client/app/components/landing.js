import React from 'react'
import Draggable from 'react-draggable';
import {DraggableCore} from 'react-draggable';
import {hideLanding} from '../actions/landing_actions.js'

const Landing = React.createClass({
  componentDidMount () {
    setTimeout(() => {
      this.props.dispatch(hideLanding())
    }, 2000)
  },

	render() {
    return (
      <div className={this.props.landingReducer}>
        <div className="header-container">
          <div className="subHeader">
            Isaac Preston
          </div>
          <div className="header">
            Software Engineer
          </div>
        </div>
        <div className="loader-container">
          <div className="loader-bar">
          </div>
        </div>
      </div>
    )
	}
})

export default Landing;