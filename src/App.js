import React from 'react';
import logo from './logo.svg';
import './App.css';
import MediaPlayer from './Components/Media';
import Video from './Components/Videolist.js';
import Audio from './Components/Audiolist.js';
import { render } from 'react-dom';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      murl : "",
      searchKey : ""
    }
    this.changeUrl = this.changeUrl.bind(this);
    this.searchedMedia = this.searchedMedia.bind(this);
  }

  changeUrl(url) {
    this.setState({ murl : url })
  }

  searchedMedia(e) {
    this.setState({ searchKey : e.target.value })
  }


  render(){
    return (
      <>
       <div className="w3-row"><br></br>
          <input className="w3-input w3-border w3-light-grey" type="text"  placeholder="Search Video" onChange={this.searchedMedia}></input>
        </div><br></br>
      <div className="w3-row">
        <div className="w3-col m3 w3-center" > <Audio onSelectURL={this.changeUrl} searchKeyValue={this.state.searchKey}></Audio></div>
        <div className="w3-col m6 w3-center w3-black"><MediaPlayer mediaUrl={this.state.murl}></MediaPlayer></div>
        <div className="w3-col m3 w3-center" > <Video onSelectURL={this.changeUrl} searchKeyValue={this.state.searchKey}></Video></div>
      </div>
      </>
    );
  }
  
}

export default App;
