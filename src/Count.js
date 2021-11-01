import React from 'react';
import { useSelector } from 'react-redux';
import './css/Count.css'

export default function Count() {
    const count = useSelector((state) => state.count);
    return (<h1>Count: {count}</h1>);
}