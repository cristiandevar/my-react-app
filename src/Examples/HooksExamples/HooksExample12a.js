import { useState } from "react";
import HooksExample12b from "./HooksExample12b";

function HooksExample12a(){
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    const increment = () => {
        setCount((c) => c + 1);
    }

    const addTodo = () => {
        setTodos((t) => [...t, "New Todo"]);
    };


    return (
        <>
            <HooksExample12b todos={todos} addTodo={addTodo}/>
            <hr />
            <div>
                Count: {count}
                <button onClick={increment}>+</button>
            </div>
        </>
        

    );
}

export default HooksExample12a;