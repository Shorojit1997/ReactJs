import React from 'react';

const Button = ({text,increment}) => {
    console.log(text)
    return (
        <div>
            <button onClick={increment}>increment {text}</button>
            
        </div>
    );
};

export default React.memo(Button);