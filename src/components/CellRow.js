import React from 'react';
import Cell from './Cell';
import {color} from './ToolBar';

const CellRow = () => (
    <div className="flex">
        <Cell color={"red"}/>
        <Cell color={window.color}/>
        <Cell color={window.color}/>
        <Cell color={window.color}/>
        <Cell color={window.color}/>
        <Cell color={window.color}/>
        <Cell color={window.color}/>
        <Cell color={window.color}/>
    </div>
)

export default CellRow;