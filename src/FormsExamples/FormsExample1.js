import { useState } from "react";

function FormsExample1(){
    const [name, setName] = useState("");
    return (
        <>
            <form>
                <label>
                    <input 
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
            </form>
        </>
    );
}

export default FormsExample1;