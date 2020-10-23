import React, { useState } from 'react';


export default function AddGuest() {

    const [countAdult, setCountAdult] = useState(0);
    const [countChildren, setCountChildren] = useState(0);

    return (
        <div>
            <p>
                <strong>Adults</strong>
                <span>Ages 13 or above</span>
                <button onClick={() => setCountAdult(countAdult - 1)}>-</button><small>{countAdult}</small><button onClick={() => setCountAdult(countAdult + 1)}>+</button>
            </p>
            <p>
                <strong>Children</strong>
                <span>Ages 2-12</span>
                <button onClick={() => setCountChildren(countChildren - 1)}>-</button><small>{countChildren}</small><button onClick={() => setCountChildren(countChildren + 1)}>+</button>
            </p>

            <p>{countAdult + countChildren}</p>
        </div>
    )
}