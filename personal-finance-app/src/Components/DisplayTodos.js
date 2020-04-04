import React, {useEffect, useCallback} from 'react';
import '../Components/Display.css'

function Display(props){

    return(
        <div>
            <h1>Todo list:</h1>
            <div className="todoBox">
                <ul></ul>
            </div>
        </div>
    )
}


export default Display;