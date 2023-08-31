import React from "react";

function RenderExample1(){
    const myElement = (
        <>
            <p>Hello!</p>
            <header id="sandy"></header>
            <table>
                <tr>
                    <th>Name</th>
                </tr>
                <tr>
                    <th>John</th>
                </tr>
                <tr>
                    <th>Elsa</th>
                </tr>
            </table>
        </>
    );
    
    return myElement;
}
export default RenderExample1;
// const container = document.getElementById('root');
// const root = ReactDOM.createRoot(container);
// root.render(myElement);