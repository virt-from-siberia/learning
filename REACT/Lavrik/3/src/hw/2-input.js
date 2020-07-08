import React from 'react';
import PropTypes from 'prop-types';

export default class extends React.Component{
    static propTypes = {
        min: PropTypes.number.isRequired,
        max: PropTypes.number.isRequired
    }

    state = {
        cnt: this.props.min
    };

    increase = () => {
        this.set(this.state.cnt + 1);
    }

    decrease = () => {
        this.set(this.state.cnt - 1);
    }

    set(newCnt){
        let cnt = Math.min(Math.max(newCnt, this.props.min), this.props.max);
        this.setState({cnt});
    }

    setValue(newStr){
        let cnt = parseInt(newStr);
        this.set(isNaN(cnt) ? this.props.min : cnt);
    }

    render(){
        return (
            <div>
                <button onClick={this.decrease}>-</button>
                <input value={this.state.cnt} 
                       onChange={(e) => this.setValue(e.target.value)} 
                />
                <button onClick={this.increase}>+</button>
            </div>
        );
    }
}

/*
Some.defaultProps = {
    min: 1,
    max: 5
};
*/
