import React from 'react';
import iconMoon from '../images/icon-moon.svg';

const Mode = (props) => (
    <nav>
        <h1>TODO</h1>
        <button>
            <img src={iconMoon} alt="toggle day mode" />
        </button>
    </nav>
);

export default Mode;