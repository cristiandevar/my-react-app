import { useState } from "react";

function HooksExample3(){
    const [car, setCar] = useState({
        'brand':'Ford',
        'model':'Mustang',
        'year':'1964',
        'color':'red'
    });

    return (
        <>
            <h1>My {car.brand}</h1>
            <p>
                It´s a {car.color} {car.model} from {car.year}  
            </p>
        </>
    );
}

export default HooksExample3;