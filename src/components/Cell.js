import React from 'react';
import PropTypes from 'prop-types';

var mouse_pressed = false;

const Cell = (props) => {
    function setColor(e)    {
        if(mouse_pressed)   {
            try{
                e.target.style.backgroundColor = window.color;
            }
            catch(e)   {
                console.log(e);
            }
            
        }
    }

    function clicked(e) {
        mouse_pressed = true
        setColor(e);
        mouse_pressed = false;
    }

    return(
        <button
        className="border border-black py-4 px-4 focus:outline-none" 
        onMouseOver={setColor}
        onMouseUp={() => mouse_pressed = false}  
        onMouseDown={() => mouse_pressed = true}
        onClick={clicked}
        >
        </button>
    )
}

Cell.propTypes = {
    color: PropTypes.string,
};

Cell.defaultProps = {
    color: 'black',
};

export default Cell;