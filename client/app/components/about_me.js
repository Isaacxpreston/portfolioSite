import React from 'react'
import Draggable from 'react-draggable';
import {DraggableCore} from 'react-draggable';
import {aboutMeTop} from '../actions/top_actions.js'
//import {clickedAway} from '../actions/icons_actions.js'
import {menuClickedAway} from '../actions/menu_actions.js'



const AboutMe = React.createClass({
  aboutMeClicked () {
		this.props.dispatch(aboutMeTop())
    //this.props.dispatch(clickedAway())
    this.props.dispatch(menuClickedAway())
	},

	render() {
    return (
      <div onClick={this.aboutMeClicked}>
        <Draggable axis="both" handle=".handle">
          <div className={this.props.windowReducer.about_me + this.props.topReducer.about_me}>
            <div className="about-me-content">
              <div className="bio">
                <p>My name is Isaac and this is my bio</p>
                <p>Thanks for reading</p>
              </div>
              <div className="profilePic">
              </div>
            </div>
          </div>
        </Draggable>
      </div>
    )
	}
})

export default AboutMe;