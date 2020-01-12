import React, { Component } from "react";
import { connect } from "react-redux";
import { GET_VIDEO_LIST} from "../store/actionTypes";
import { videoModule } from "../api/api";


class Audio extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          murl :[],
        }
        this.searchVideo = this.searchVideo.bind(this);
      }
    
    searchVideo(e) {
        var val = e.target.value.toLowerCase()
        var searchV = this.props.video.filter(function(url) {
            var str = url.toLowerCase();
            return str.includes(val);
          });
        this.setState({ murl : searchV })
        if(e.target.value ===''){
            this.setState({ murl : this.props.video })
        }
    }

    componentDidMount(){
        this.props.videolist();
    }

     componentWillReceiveProps(){
        this.setState({ murl : this.props.video })
     }

     componentDidUpdate(prevProps, prevState) {
        if(prevProps.searchKeyValue !== this.props.searchKeyValue) {
            var val = this.props.searchKeyValue.toLowerCase()
            var searchV = this.props.video.filter(function(url) {
                var str = url.toLowerCase();
                return str.includes(val);
              });
            this.setState({ murl : searchV })
            if( this.props.searchKeyValue ===''){
                this.setState({ murl : this.props.video })
            }
        }
     }
   
     

    render() {
      return (
     
        <table className="w3-table w3-bordered">
            <tbody>
               <tr><th>Audio List</th></tr>
               {/* <tr><th><input className="w3-input" type="text" placeholder="Search Video" onChange={this.searchVideo}/></th></tr>  */}
           
            {
                this.state.murl.map((video, index)=>{
                    return (
                        <tr key={index} >
                            <td style={{cursor:"pointer"}} onClick={()=>this.props.onSelectURL(video)}>{video}</td>
                        </tr>
                    )
                })
            }
          </tbody>
        </table>
     
      );
    }
  }

  
function mapStateToProps(state) {
    return {
        video: state.Media.video
    };
}
const mapDispatchToProps = dispatch => ({
    videolist: async () =>
        dispatch({
            type: GET_VIDEO_LIST,
            payload: await videoModule.videolist()
        })
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Audio);
