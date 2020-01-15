import React, { useState } from 'react';

const FunctionHook = () => {

    const [active, setActive] = useState(true);

    const handleClick = () => {
        setActive(!active);
    }

    return (
        <div>
            <button onClick={handleClick}>Ocultar</button>
            {active &&
                <h1> Function Hook </h1>
            }
        </div>
    );
}

export default FunctionHook;
