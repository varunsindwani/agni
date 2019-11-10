import React from 'react';

var mouse_pressed = false;
var temp = false;

const Cell = () => {
    function setColor(e)    {
        // console.log(mouse_pressed)
        if(mouse_pressed || temp)   {
            temp = false;
            // console.log({mouse})
            try{
                e.target.style.backgroundColor = 'black';
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


export default Cell;