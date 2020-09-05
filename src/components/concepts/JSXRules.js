import React from 'react';

const JSXRules = () => {
    return (
        <div className="main">
            <div className="mainDiv">
                <h1 className="section-title">JSX</h1>
                <dl>
                    <dt>Resembles HTML</dt>
                    <dd>Its not. It's actually closer to Javascript</dd>
                    <dt>React Elements</dt>
                    <dd>These are used to construct and update the DOM, or what you see on the screen.</dd>
                    <dt>Not Required</dt>
                    <dd>You can write in vanilla JS, but most</dd>
                </dl>
                <hr/>
            <NormalComponent />
            <CreateElementComponent />
            </div>
        </div>
    )
}

const NormalComponent = () => {
    return (
        <div style = {{border: '2px solid black' }}>
            <h1> Normal Functional Component </h1>
            <p>This was constructed with JSX in the return.</p>
            <img src="" />

        </div>
    );
};

const imageLocation = '';

const CreateElementComponent = () => {
    return (
        React.createElement('div', {style: {border: '2px solid black' } },
                            React.createElement('h1', null, 'CreateElement Component'),
                            React.createElement('p', null, 'This was constructed with the CreateElement calls.'),
                            React.createElement('img', {src: imageLocation }, null)
        )
    )
}
export default JSXRules;