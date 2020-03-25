import React from 'react';

class FirstClicker extends React.Component{
    state = {count: 0}

    handleClick = () =>{
        this.setState({
            count: this.state.count + 1
        })
    }

    render(){
        const { count } = this.state;
        return(
            <div>
                <h1>Current Score: {count}</h1>
        <button onClick={this.handleClick}>+1</button>
            </div>
        )
    }

};

export default FirstClicker;