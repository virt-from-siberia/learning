import React, {useState} from 'react';
import HW1 from './hw/1-simple.js';
import HW2 from './hw/2-input.js';
import HW3 from './hw/3-lazy.js';
import Derived from './hw/4-deriveds';

export default function(){
    let [someMin, setSomeMin] = useState(20);

    setTimeout(() => {
        setSomeMin(40);
    }, 2000);

    return (
        <div>
            <h2>Minmax simple</h2>
            <HW1 min={1} max={5} />
            <h2>Minmax input</h2>
            <HW2 min={20} max={50} />
            <h2>Lazy input</h2>
            <HW3 min={20} max={50} />
            <h2>Derrived input</h2>
            <Derived min={someMin} max={50} key={someMin + ':' + 50} />
        </div>
    );
}