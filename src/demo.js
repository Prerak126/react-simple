import React, { Component } from 'react';
import { createStore } from 'redux';

class ReduxDemo extends Component {

    render() {
 
    const reducer = function(state, action){
        if(action.type === "ATTACK"){
            return action.payload
        }

        if(action.type === "GREEN ATTACK"){
            return action.payload
        }

        return state;
    }
   
    const store = createStore(reducer, "Peace");
    
    store.subscribe (() => {
        console.log("store is now ", store.getState());
    })

    store.dispatch({type: "ATTACK", payload: "Iron Man"})
    store.dispatch({type: "GREEN ATTACK", payload: "Hulk"})


        return (
            <div>
                test
            </div>
        )
    }
}

export default ReduxDemo;