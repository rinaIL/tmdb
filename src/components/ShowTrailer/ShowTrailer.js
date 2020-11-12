import React from "react";
import YouTube from 'react-youtube';

class ShowTrailer extends React.Component{
    render() {
        const opts = {
            height: '390',
            width: '640',
            playerVars: {
              // https://developers.google.com/youtube/player_parameters
              autoplay: 1,
            },
          };
          return(<div>
                   <a href="#" onClick={this.props.handlerHide}>Hide</a>
                    <YouTube videoId={this.props.id} opts={opts} onReady={this._onReady} />
                </div> );
    }

}

export default ShowTrailer;