import { useState } from "react";

function FormsExample3(){
    const [inputs, setInputs] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
       alert(`${inputs['username']} ${inputs['age']}`);
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setInputs(values => ({...values, [name]:value}));
    } 

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    Enter the username
                    <input
                        type="text"
                        name="username"
                        onChange={handleChange} 
                    />
                </label>
                <label>
                    Enter de age
                    <input
                        type="text"
                        name="age"
                        onChange={handleChange} 
                    />
                </label>
                <input 
                    type="submit"
                />
            </form>
        </>
    );
}

export default FormsExample3;