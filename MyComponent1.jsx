import React,{useState} from "react";

function MyComponent(){

    const [students,setStudents]=useState([]);
    const [name,setName]=useState("");
    const [id,setId]=useState("");
    const [isStudent,setIsStudent]=useState(false);
    
    function addStudent(){
        const newStud ={
            name:name,
            id:id,
            isStudent:isStudent,
        }
        setStudents(s=>[...s,newStud])
        setName("");
        setId("");
        setIsStudent(false);
    }

    function removeStudent(index){
        setStudents(s=>s.filter((_,i)=>i!==index));
    }
    function handleName(event){
        setName(event.target.value);

    }
    function handleId(event){
        setId(event.target.value);
    }
    function handleIsStudent(){
        const isChecked=document.getElementById("isStudent").checked;
        setIsStudent(isChecked);
    }
    return(
        <>
            <h2>List of Students</h2>
            <ul >
                {students.map((student,index)=><li key={index} onClick={()=>removeStudent(index)}>
                                                    {student.id}{" "}
                                                    {student.name}{" "}
                                                    {student.isStudent.toString()}
                                               </li>)}
            </ul>
            <input type="text" placeholder="Enter ur Name" onChange={handleName} value={name}/><br />
            <input type="number" placeholder="Enter ur Id" onChange={handleId} value={id}/><br />
            <label htmlFor="isStudent">Student:</label>
            <input type="checkbox" id="isStudent" onChange={handleIsStudent} checked={isStudent}/><br />
            <button onClick={addStudent}>Submit</button>
        </>
    );
}

export default MyComponent