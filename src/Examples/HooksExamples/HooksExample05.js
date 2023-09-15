import { useState, useEffect } from "react";

function HooksExample5(){
    const [count, setCount] = useState(0);

    // useEffect(() => {
    //     setTimeout(()=>{
    //         setCount((count) => count + 1)
    //     }, 1000);
    // });

    useEffect(() => {
        let timer = setTimeout(()=>{
            setCount(() => count + 1);
            // setCount((count) => count + 1);
        }, 1000);
    // });
    // }, [count]);
    return () => clearTimeout(timer);
    }, []);

    return <h1>I´ve rendered {count} times!</h1>;
}

export default HooksExample5;