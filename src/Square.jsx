import React from 'react';
import './css/Square.css';
import {useDispatch} from 'react-redux';
import clickAction from './action/countAction';

export default function Square(props) {
    const symbol = props.symbol;
    
    let color = 'white';
    if (symbol === 0) {
        color = 'white';
    } else {
        color = 'black';
    }

    const disPatch = useDispatch();

    return (<div onClick={() => disPatch(clickAction(props.x, props.y, symbol))}
     id = 'square' class = {color}></div>);
}