import React from 'react'
import Draggable from 'react-draggable';
import {DraggableCore} from 'react-draggable';

const AboutMe = React.createClass({
	render() {
    return (
      <div>
        <Draggable axis="both" handle=".handle">
          <div className="about-me-notepad handle">
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