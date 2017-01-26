import React from 'react'
import Draggable from 'react-draggable';
import {DraggableCore} from 'react-draggable';
import {alikeMeClicked, songspaceClicked} from '../actions/portfolio_icons_actions.js'
import Content from './portfolio_content.js'

const Portfolio = React.createClass({

  alikeMeClicked () {
		this.props.dispatch(alikeMeClicked())
	},

	songspaceClicked () {
		this.props.dispatch(songspaceClicked())
	},

	render() {
    return (
      <div>
        <Draggable axis="both" handle=".handle">
          <div className={this.props.windowReducer.portfolio}>
            <div
              className={this.props.portfolioIconsReducer.alike_me}
              onClick={this.alikeMeClicked}
            ></div>
            <div
              className={this.props.portfolioIconsReducer.songspace}
              onClick={this.songspaceClicked}
            ></div>
            <Content {...this.props} content={this.props.portfolioIconsReducer.content} />
          </div>
        </Draggable>
      </div>
    )
	}
})

export default Portfolio;