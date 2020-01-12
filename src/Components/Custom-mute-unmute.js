import React, { Component } from 'react'
import { withMediaProps } from 'react-media-player'
 
class CustomMuteUnmute extends Component {
  shouldComponentUpdate({ media }) {
    return this.props.media.isMuted !== media.isMuted
  }
 
  _handleMuteUnmute = () => {
    this.props.media.muteUnmute()
  }
 
  render() {
    const { className, style, media } = this.props
    return (
      <button
        type="button"
        className={className}
        style={style}
        onClick={this._handleMuteUnmute}
      >
        <i className={media.isMuted ? 'fas fa-volume-slash' : 'fa fa-volume-up'}></i>
      
      </button>
    )
  }
}
 
export default withMediaProps(CustomMuteUnmute)