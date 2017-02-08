import React from 'react'
import Draggable from 'react-draggable';
import {DraggableCore} from 'react-draggable';
import {alikeMeClicked, songspaceClicked, sixteenPersonalityClicked} from '../actions/portfolio_icons_actions.js'
import {portfolioTop} from '../actions/top_actions.js'
import {menuClickedAway} from '../actions/menu_actions.js'
import {myPortfolioXClicked, myPortfolioXReleased} from '../actions/x_button_actions.js'
import Content from './portfolio_content.js'


const Portfolio = React.createClass({

  alikeMeClicked () {
		this.props.dispatch(alikeMeClicked())
	},

  sixteenPersonalityClicked () {
		this.props.dispatch(sixteenPersonalityClicked())
	},

	songspaceClicked () {
		this.props.dispatch(songspaceClicked())
	},

  portfolioClicked () {
		this.props.dispatch(portfolioTop())
    this.props.dispatch(menuClickedAway())
	},

  xClicked () {
    this.props.dispatch(myPortfolioXClicked())
  },

  xReleased () {
    this.props.dispatch(myPortfolioXReleased())
  },

	render() {
    return (
      <div onClick={this.portfolioClicked}>
        <Draggable axis="both" handle=".handle">
          <div className={this.props.windowReducer.portfolio + this.props.topReducer.portfolio}>
            <div
              className={this.props.xButtonReducer.portfolio}
              onMouseDown={this.xClicked}
              onMouseUp={this.xReleased}
            >
            </div>
            <div
              className={this.props.portfolioIconsReducer.sixteen_personality}
              onClick={this.sixteenPersonalityClicked}
            ></div>
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