// useState Hook

// initialValue/starting point: "" (Empty)
// name -> Current Value 
// setName -> Value to be changed

import { useState } from "react";

function NameInput() {
    const [name, setName] = useState("");
    return (
        <div>
            <hr />
            <p>Enter the name in input field to print</p>
            <input type="text" style={{padding: "10px", fontSize: "25px"}} value={name} onChange={(e) => setName(e.target.value)} />
            <hr />
            <h1>Hello, {name || "unknown"}!</h1>
        </div>
    );
}

export default NameInput;