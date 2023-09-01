import React from "react";

function RenderExample1(){
    const myElement = (
        <>
            <p>Hello!</p>
            <header id="sandy"></header>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>John</td>
                    </tr>
                    <tr>
                        <td>Elsa</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
    
    return myElement;
}
export default RenderExample1;
// const container = document.getElementById('root');
// const root = ReactDOM.createRoot(container);
// root.render(myElement);