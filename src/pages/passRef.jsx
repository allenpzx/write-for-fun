import React from 'react';
import LogProps from '../components/LogProps.js';
import A from '../components/a.js';

const NA = LogProps(A);

export default class PassRef extends React.Component {

    state = {
        num: 0
    }

    componentDidMount() {
        this.NA.specialA()
    }
    
    handleClick = () => this.setState({ num: this.state.num + 1 });

    render() {
        return (
            <div>
                <h1>pass ref</h1>
                <NA ceshi={this.state.num} ref={re => this.NA = re} />
                <button onClick={this.handleClick}>+1</button>
            </div>
        )
    }
}