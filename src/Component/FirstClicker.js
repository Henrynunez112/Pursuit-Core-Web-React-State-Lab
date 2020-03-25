import React from 'react';

class FirstClicker extends React.Component{
    state = {count: 0};
    increase = {add: 1};


    handleClick = () =>{
        if(this.state.count < 100){
            this.setState(()=>{
                return {count: this.state.count + this.increase.add}
            })
        }else{
            alert("You Won");
            this.setState(() =>{
                return (
                    this.state.count = 0,
                    this.increase.add = 1
                )
            })
        }
    }

    pointsAdded = () =>{
        if(this.state.count - 10 < 0){
            alert('You do not have enough points');
        }else{
            this.setState(() => {
                return(
                    this.increase.add + 1,
                    this.state.count - 10
                )
            })
        }
    }

    render(){
        const { count } = this.state;
        return(
            <div>
                <h1>Current Score: {count}</h1>
                <button onClick={this.handleClick}>+{this.increase.add}</button>
                <button onClick={this.pointsAdded}>Pay 10 points to change from +{this.increase.add} to +{this.increase.add + 1}</button>
            </div>
        )
    }

};

export default FirstClicker;