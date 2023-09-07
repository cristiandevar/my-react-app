import { useState, useEffect, useRef } from "react";

function LoadFile(){
    const [inputs, setInputs] = useState([<input type="file" id="inputfile1"/>]);
    const [serialId, setSerialId] = useState(1);

    const addInput = () => {
        setInputs(
            [...inputs, <input type="file" id={"inputfile"+(serialId+1)}/>]            
        );
        setSerialId(serialId + 1);
    }

    const deleteItem = (delindex) => {
        console.log(delindex);
        setInputs(inputs.filter((input, index) => index !== delindex));
    }

    const listaElementos =  inputs.map((input, index) => <li key={index} style={{'list-style-type': 'none'}}>{index > 0 &&<button id={index + 'btn'} onClick={() => deleteItem(index)}>-</button>}{input}</li>);
    
    
    return(
        <>
            <div>
                <ul>
                    {listaElementos}
                    <button onClick={addInput}>+</button>
                </ul>
                
            </div>
        </>
    );
}

export default LoadFile;