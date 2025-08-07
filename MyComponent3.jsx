import React,{useState,useEffect} from "react";

function MyComponent(){
    const [count,setCount]=useState(0);
    const [color,setColor]=useState("black");

    /*1)*/
    useEffect(()=>{
        document.title=`count :${count} ${color}`;
    });
    // runs for every rendering
    
    /*2)
    useEffect(()=>{
        document.title=`count :${count} ${color}`;
    },[]);
    runs only at the tym of mounting(creation of component) i.e first load
    */

    /*3)
    useEffect(()=>{
        document.title=`count :${count} ${color}`;
    },[count]);
    runs when count changes
    */
    
    function increment(){
        setCount(c=>c+1);
    }
    function decrement(){
        setCount(c=>c-1);
    }
    function changeColor(){
        setColor(c=>c==="black"?"blue":"black");
    }
    return(
        <div>
            <p style={{color:color}}>Count:{count}</p>
            <button onClick={increment}>Add</button>
            <button onClick={decrement}>Sub</button><br />
            <button onClick={changeColor}>Change Color</button>
        </div>
    );
}

export default MyComponent;