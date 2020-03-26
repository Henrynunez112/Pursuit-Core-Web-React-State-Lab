import React from 'react';

class FirstClicker extends React.Component{
    state = {count: 0, add: 1, won: false};


    handleClick = (e) =>{
        // debugger
        if(this.state.count < 100){
            this.setState((prevState, props)=>{
                return {count: this.state.count + this.state.add}
            });
        }else if(this.state.count >= 100){
            alert("You Won");
            this.setState({count: 0,
                            add: 1,
                            won: true})
        }
    }

    pointsAdded = (e) =>{
        if(this.state.count - 10 < 0){
            alert('You do not have enough points');
        }else{
            this.setState({
                count: this.state.count - 10,
                add: this.state.add + 1
            })
        }
    }
    handleReset = () =>{
        this.setState({
            count: 0,
            add: 1,
            won: false
        })
    }

    render(){
        const { count } = this.state;
        const button = this.state.won ? <button onClick={this.handleReset}>Reset</button> : null
        return(
            <div>
                <h1>Current Score: {count}</h1>
                <button onClick={this.handleClick}>+{this.state.add}</button>
                <button onClick={this.pointsAdded}>Pay 10 points to change from +{this.state.add} to +{this.state.add + 1}</button>
                {button}
            </div>
        )
    }

};

export default FirstClicker;