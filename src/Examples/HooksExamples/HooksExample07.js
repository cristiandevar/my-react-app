import { useState, createContext, useContext } from "react";

const UserContext = createContext();
function HooksExample7(){
    const [user, setUser] = useState('Jesse');
    return (
        <UserContext.Provider value={[user, setUser]}>
            <h1>Hello {user}!!</h1>
            <Otro1 />
        </UserContext.Provider>
    );
}

function Otro1(){
    return (
        <>
            <h1>Hello!!</h1>
            <Otro2 />
        </>

    );
}

function Otro2(){
    const [user, setUser] = useContext(UserContext);
    return (
        <>
            <h1>Hello {user} again!!</h1>
            <button onClick={() => setUser('Ale')}></button>
        </>
    );
}

export default HooksExample7;