import React from 'react'
import Draggable from 'react-draggable';
import {DraggableCore} from 'react-draggable';
import {alikeMeClicked, songspaceClicked} from '../actions/portfolio_icons_actions.js'

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
          <div className="portfolio handle">
            <div
              className={this.props.portfolioIconsReducer.alike_me}
              onClick={this.alikeMeClicked}
            ></div>
            <div
              className={this.props.portfolioIconsReducer.songspace}
              onClick={this.songspaceClicked}
            ></div>

            <div className="portfolio-content">
            <h1>
            asklfjksdajk  kaskdjfakjsdf
            asdkfasjknfkasdfk kasjkdfkaoSDFKJkdfk
            askdfnsadfnip n;923908nuf;892unjfsdkn
            askjsdnaf
            asdkfsadf
            sadfjdsjfjdsfj
            sdjfdfsjfds
            sfdjdsjfjjdf           asklfjksdajk  kaskdjfakjsdf
            asdkfasjknfkasdfk kasjkdfkaoSDFKJkdfk
            askdfnsadfnip n;923908nuf;892unjfsdkn
            askjsdnaf
            asdkfsadf
            sadfjdsjfjdsfj
            sdjfdfsjfds
            sfdjdsjfjjdf           asklfjksdajk  kaskdjfakjsdf
            asdkfasjknfkasdfk kasjkdfkaoSDFKJkdfk
            askdfnsadfnip n;923908nuf;892unjfsdkn
            askjsdnaf
            asdkfsadf
            sadfjdsjfjdsfj
            sdjfdfsjfds
            sfdjdsjfjjdf           asklfjksdajk  kaskdjfakjsdf
            asdkfasjknfkasdfk kasjkdfkaoSDFKJkdfk
            askdfnsadfnip n;923908nuf;892unjfsdkn
            askjsdnaf
            asdkfsadf
            sadfjdsjfjdsfj
            sdjfdfsjfds
            sfdjdsjfjjdf           asklfjksdajk  kaskdjfakjsdf
            asdkfasjknfkasdfk kasjkdfkaoSDFKJkdfk
            askdfnsadfnip n;923908nuf;892unjfsdkn
            askjsdnaf
            asdkfsadf
            sadfjdsjfjdsfj
            sdjfdfsjfds
            sfdjdsjfjjdf           asklfjksdajk  kaskdjfakjsdf
            asdkfasjknfkasdfk kasjkdfkaoSDFKJkdfk
            askdfnsadfnip n;923908nuf;892unjfsdkn
            askjsdnaf
            asdkfsadf
            sadfjdsjfjdsfj
            sdjfdfsjfds
            sfdjdsjfjjdf
            </h1>
            </div>
          </div>
        </Draggable>
      </div>
    )
	}
})

export default Portfolio;