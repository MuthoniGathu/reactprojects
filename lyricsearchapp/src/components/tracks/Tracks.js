import React, { Component } from "react";
import { Consumer } from "../../Context";
import Track from "../tracks/Track";
import Spinner from "../layout/Spinner";

class Tracks extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          // console.log(value);
          // return <h1>Tracks</h1>;
          const { track_list, heading } = value;
          if (track_list === undefined || track_list.length === 0) {
            return <Spinner />;
          } else {
            return (
              <React.Fragment>
                <h3 className="text-center mb-4">{heading}</h3>
                <div className="row">
                  {track_list.map(item => (
                    <Track key={item.track.track_id} track={item.track} />
                  ))}
                </div>
              </React.Fragment>
              // <h3>Tracks Loaded</h3>
            );
          }
        }}
      </Consumer>
    );
  }
}

export default Tracks;
