import React from 'react';

const someText= React.createElement(
    'h1',
    {className: 'h1_someText'},
    'Hello, world!'
)
class Example extends React.Component {
    render() {
    return(
        <div>
            {someText}
        </div>
       )
    }
}

export default Example;