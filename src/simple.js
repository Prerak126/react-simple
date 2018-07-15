import React, { Component } from "react"

class Button extends Component {
    handleClickEvent = () => {
        this.props.onClickIncrement(this.props.incrementor);
    }

    render() {
        return (
            <button onClick={this.handleClickEvent}>+{this.props.incrementor}</button>
        )
    }
}

class Result extends Component {
    render() {
        return (
            <div>{this.props.counter}</div>
        )
    }
}

class Simple extends Component {

    constructor(props){
        super(props);
        this.state = {counter : 0};
    }

    incrementCounter = (incrementor) => {
        this.setState( (prevState) => ({
            counter: prevState.counter + incrementor
        }))
    }

    render() {
        return (
            <div>
                <Button incrementor={1} onClickIncrement={this.incrementCounter}/>
                <Button incrementor={2} onClickIncrement={this.incrementCounter}/>
                <Button incrementor={5} onClickIncrement={this.incrementCounter}/>
                <Button incrementor={10} onClickIncrement={this.incrementCounter}/>
                <Button incrementor={20} onClickIncrement={this.incrementCounter}/>
                <Result counter={this.state.counter}/>
            </div>
        )
    }
}

export default Simple;