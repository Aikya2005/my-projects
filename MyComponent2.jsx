import React,{useState} from "react";

function MyComponent(){
    const [name,setName]=useState();
    function updateName(){
        const newName=document.getElementById("getValue").value;
        setName(newName);
    }
    return(
        <>
            <p>Name:{name}</p>
            <input id="getValue" type="text" />
            <button onClick={updateName}>Submit</button>
        </>
    );
}

export default MyComponent