import React from 'react'
import Draggable from 'react-draggable';
import {DraggableCore} from 'react-draggable';
import {aboutMeTop} from '../actions/top_actions.js'
import {menuClickedAway} from '../actions/menu_actions.js'
import {aboutMeXClicked, aboutMeXReleased} from '../actions/x_button_actions.js'
import axios from 'axios';


const AboutMe = React.createClass({
  aboutMeClicked () {
		this.props.dispatch(aboutMeTop())
    this.props.dispatch(menuClickedAway())
	},

  xClicked () {
    this.props.dispatch(aboutMeXClicked())
  },

  xReleased () {
    this.props.dispatch(aboutMeXReleased())
  },

	render() {
    return (
      <div onClick={this.aboutMeClicked}>
        <Draggable axis="both" handle=".handle">
          <div className={this.props.windowReducer.about_me + this.props.topReducer.about_me}>
            <div
              className={this.props.xButtonReducer.about_me}
              onMouseDown={this.xClicked}
              onMouseUp={this.xReleased}
            >
            </div>
            <div className="about-me-content">
              <div className="profilePic">
              </div>
              <div className="bio">
                <p>My name is Isaac</p>
                <p>I grew up in Philadelphia</p>
                <p>I am a full stack software engineer</p>
                <p>I made this site in React.js with Redux</p>
                <p>100 Demons is my favorite band</p>
                <form method="get" action={require("../resume.pdf")}>
                  <button
                    className="resumeButton"
                    type="submit"
                  >DOWNLOAD</button>
                  my resume
                </form>
              </div>
            </div>
          </div>
        </Draggable>
      </div>
    )
	}
})

export default AboutMe;