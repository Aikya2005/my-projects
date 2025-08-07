import { number } from "prop-types";
import React,{useState} from "react";

function MyComponent(){
    const [student,setStudent]=useState({
                                            name:"",
                                            id:null,
                                            isStudent:false,
                                        });

    function updateName(event){
        
        setStudent(s=>({...s, name:event.target.value}));
    }
    function updateId(event){
        setStudent(s=>({...s,id:event.target.value}))
    }
    function updateStudentStatus(){
        const isChecked=document.getElementById("isStudentCheck").checked;
        setStudent(s=>({...s,isStudent:isChecked}));
    }
    return(
        <>
            <p>Name: {student.name}</p>
            <input onChange={updateName} placeholder="Enter ur Name" type="text" />

            <p>Id:{student.id}</p>
            <input type="number" placeholder="Enter ur Id" onChange={updateId}/>

            <p>Student:{student.isStudent?"Yes":"No"}</p>
            <label htmlFor="isStudentCheck">Employee:</label>
            <input onChange={updateStudentStatus} type="checkbox" name="isStudentCheck" id="isStudentCheck" />
        </>
    );
}

export default MyComponent