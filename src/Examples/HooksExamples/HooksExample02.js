import { useState } from "react";

function HooksExample2(){
    const [brand, setBrand] = useState('Ford');
    const [model, setModel] = useState('Mustang');
    const [year, setYear] = useState('1964');
    const [color, setColor] = useState('red');

    return (
        <>
            <h1>My {brand}</h1>
            <p>
                It´s a {color} {model} from {year}  
            </p>
        </>
    );
}

export default HooksExample2;

