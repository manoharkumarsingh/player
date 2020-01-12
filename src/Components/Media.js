import React, { Component } from 'react'
import { Media, Player, controls, utils } from 'react-media-player'
import CustomPlayPause from './Custom-play-pause'
import CustomMuteUnmute from './Custom-mute-unmute'
import CustomFullScreen from './Custom-full-screen'
const {
  PlayPause,
  CurrentTime,
  Progress,
  SeekBar,
  Duration,
  MuteUnmute,
  Volume,
  Fullscreen,
} = controls
const { keyboardControls } = utils
 
class MediaPlayer extends Component {
  render() {
    // const { Player, keyboardControls } = this.props
    return (
      <Media style={{width: '10px', height: '100%'}}>
        {mediaProps => (
          <div
            className="media"
            onKeyDown={keyboardControls.bind(this, mediaProps)}
          >
            <Player src={'./video/'+this.props.mediaUrl} className="media-player" />
            <div className="media-controls">
              {/* <PlayPause /> */}
              <SeekBar /><br></br>
              <CustomPlayPause />
              <CurrentTime  style={{marginLeft:"20px"}} />/<Duration />
              <CustomMuteUnmute style={{marginLeft:"20px"}}/>
              <Volume style={{PaddingTop:"20px"}}/> 
              <CustomFullScreen style={{marginLeft:"20px"}} />
            </div>
          </div>
        )}
      </Media>
    )
  }
}

export default MediaPlayer;
