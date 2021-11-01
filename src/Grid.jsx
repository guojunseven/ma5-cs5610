import React from 'react';
import Square from './Square';
import './css/Grid.css';
import {useSelector} from 'react-redux';

export default function Grid() {
    const count = useSelector((state) => state.count);
    const gridState = useSelector((state) => state.gridState);
    const gridComponent = [];
    
    for (let i = 0; i < gridState.length; i++) {
        let row = gridState[i];
        for (let j = 0; j < row.length; j++) {
            gridComponent.push(<Square symbol = {gridState[i][j]} x = {i} y = {j} />);
        }
    }
    
    return (
        <div id = 'grid'>
            {gridComponent}
        </div>
        
    );
    
}