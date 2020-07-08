import React, { Component } from "react";
import { connect } from "react-redux";
import { getTracks } from "./actions/tracks";

class App extends Component {
    state = {
        inputTrack: "",
        inputFindTrack: ""
    };

    findTrack = evt => {
        this.setState({
            inputFindTrack: evt.target.value
        });
        const { onFinedTrack } = this.props;
        onFinedTrack(this.state.inputFindTrack);
    };

    changeInput = evt => {
        this.setState({
            [evt.target.name]: evt.target.value
        });
        console.log(this.state[evt.target.name]);
        if ([evt.target.name] === "inputFindTrack") {
        }
    };

    addTrack = evt => {
        const { onAddTrack } = this.props;
        onAddTrack(this.state.inputTrack);
        this.setState({
            inputTrack: ""
        });
    };

    render() {
        const { tracks } = this.props;
        return (
            <div>
                <div>
                    <input
                        type='text'
                        className='trackInput'
                        value={this.state.inputTrack}
                        onChange={evt => this.changeInput(evt)}
                        name='inputTrack'
                    />
                    <button onClick={this.addTrack} className='addTrack'>
                        Add track
                    </button>
                </div>
                <hr />
                <div>
                    <input
                        type='text'
                        className='trackInput'
                        onChange={evt => this.findTrack(evt)}
                        name='inputFindTrack'
                    />
                    <button onClick={this.findTrack} className='addTrack'>
                        Find track
                    </button>
                    <div>
                        <button onClick={this.props.onGetTracks}>
                            Get tracks
                        </button>
                    </div>
                </div>

                <ul className='list'>
                    {tracks.map((track, index) => (
                        <li key={index}>{track.name}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default connect(
    state => ({
        tracks: state.tracks.filter(track =>
            track.name.includes(state.filterTracks)
        )
    }),
    dispatch => ({
        onAddTrack: name => {
            const payload = {
                id: Date.now().toString(),
                name: name
            };
            dispatch({ type: "ADD_TRACK", payload: payload });
        },
        onFinedTrack: name => {
            dispatch({ type: "FIND_TRACK", payload: name });
        },
        onGetTracks: () => {
            //NOTE/: Вместо обьекта передается функция
            dispatch(getTracks());
        }
    })
)(App);
