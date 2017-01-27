import React from 'react'
import Draggable from 'react-draggable';
import {DraggableCore} from 'react-draggable';
import {alikeMeClicked, songspaceClicked} from '../actions/portfolio_icons_actions.js'
import {portfolioTop} from '../actions/top_actions.js'
import {menuClickedAway} from '../actions/menu_actions.js'
//import {clickedAway} from '../actions/icons_actions.js'
import Content from './portfolio_content.js'


const Portfolio = React.createClass({

  alikeMeClicked () {
		this.props.dispatch(alikeMeClicked())
	},

	songspaceClicked () {
		this.props.dispatch(songspaceClicked())
	},

  portfolioClicked () {
		this.props.dispatch(portfolioTop())
    //this.props.dispatch(clickedAway())
    this.props.dispatch(menuClickedAway())
	},

	render() {
    return (
      <div onClick={this.portfolioClicked}>
        <Draggable axis="both" handle=".handle">
          <div className={this.props.windowReducer.portfolio + this.props.topReducer.portfolio}>
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