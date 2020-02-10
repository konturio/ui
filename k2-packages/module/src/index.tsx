import React from 'react';

const Module = () => <div>Sync Module!</div>;

interface SquareConfig {
    color: string;
    width: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    return {
        color: config.color,
        area: config.width
    };
}

let mySquare = createSquare({ color: "red", width: 100 });
console.log(mySquare);


export default Module;
