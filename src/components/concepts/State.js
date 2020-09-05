import React, { useState } from 'react';
import FBpic from '../../assets/fbThumbsUp.png';

const State = () => {
    return (
        <div className="main">
            <div className="mainDiv">
                <ul>
                    <dt>
                        useState is unique to Functional Components
                    </dt>
                    <dd>
                        Class based components have a sepearte means of utilizing and modifying state
                    </dd>
                    <dt>
                        useState uses Array destructuring
                    </dt>
                    <dd>
                        useState provides a state variableto reference the value of the state, and a state modification function that allows you to ste the new value of the state.
                    </dd>
                    <dt>
                        useState is a Hook
                    </dt>
                    <dd>
                        useState is a tool that originates from the list of Hooks you cna access within REcat.
                    </dd>
                    <dt>Triggers Re-Renders</dt>
                    <dd>
                        Like when a prop changes, changinf the state of a component re-renders the whole component
                    </dd>
                </ul>
                <StateExample />
            </div>
        </div>
    )
}

function StateExample() {
    const [text,setText] = useState('initial value');
    const [likeNum, setLikeNum] = useState(0);
    const [textColor, setTextColor] = useState('blue');

    return (
        <div>
            <input value ={text} onChange={ e => setText(e.target.value)}/>
            <br />
            <img style={{width: '100px', height: '100px'}}
             src= {FBpic}
             onClick ={ e => setLikeNum(likeNum + 1)} />
             <span> { likeNum }</span>
             <br />
             <br />
             <p style={{color: textColor }} 
             onMouseEnter = { () => setTextColor('red') }
             onMouseLeave = { () => setTextColor('blue') } >
                 This text should be able to change colors
             </p>
        </div>
    )
}
export default State;