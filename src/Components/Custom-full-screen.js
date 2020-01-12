import React, { Component } from 'react'
import { withMediaProps } from 'react-media-player'
 
class CustomFullScreen extends Component {
  shouldComponentUpdate({ media }) {
    return this.props.media.isFullscreen !== media.isFullscreen
  }
 
  _handleFullScreen = () => {
    this.props.media.fullscreen()
  }
 
  render() {
    const { className, style, media } = this.props
    return (
      <button
        type="button"
        className={className}
        style={style}
        onClick={this._handleFullScreen}
      >
        <i className={media.isFullscreen ? 'fa fa-arrows-alt' : 'fa fa-arrows-alt'}></i>
      
      </button>
    )
  }
}
 
export default withMediaProps(CustomFullScreen)