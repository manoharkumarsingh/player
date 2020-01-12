import React, { Component } from 'react'
import { withMediaProps } from 'react-media-player'
 
class CustomPlayPause extends Component {
  shouldComponentUpdate({ media }) {
    return this.props.media.isPlaying !== media.isPlaying
  }
 
  _handlePlayPause = () => {
    this.props.media.playPause()
  }
 
  render() {
    const { className, style, media } = this.props
    return (
      <button
        type="button"
        className={className}
        style={style}
        onClick={this._handlePlayPause}
      >
        <i className={media.isPlaying ? 'fa fa-pause' : 'fa fa-play'}></i>
      
      </button>
    )
  }
}
 
export default withMediaProps(CustomPlayPause)