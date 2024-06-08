// onsubmit ka use hm isliye krte hain ki hamara form jo hai wo submit krne per reload na ho 
"use client" // kyonki next.js ek full stack framework hai islie batana padta hai hame ki aap kha use kr rhe hain client side or server side waise ye bydefault server side hi hota hota hai 
import { Exo } from "next/font/google";
import React, { useState } from "react";

const page=()=>{
   const [title, settitle]=useState("") // react me variables bante hain usestate hook  ki help se jaise hi app usestate likhenge wo import kar lega usestate ko
   const [desc, setdesc]=useState("")
   // jo taks hain un sbko  store karane k liye hm unko ek container k ander rkhenge ie-
   const [mainTask, setMainTask]=useState([])
   const submitHandler=(e)=>{   // form autosubmit na ho usko submit hone se rokega ye  
         e.preventDefault()
         setMainTask([...mainTask,{title,desc}]); // ye hamare title aur desc ko store karayega hamre array of object me yaani aise hm data ko store krate hian 
         settitle("")            // ab jo set kiya hai title aur desc usko add krne ke bad khali karna hai to hm settitle aur setdesc ko khali krdenge 
         setdesc("")
         console.log(mainTask)

   };
// KEY KYA krta hai ki har ek key ko ek unique identificatin deta hai jisse react usko defrentiate kr pata hai ki ye wala task ye hai aur ye wala ye hain 
  
  const deleteHandler=(i)=>{
       let copytask=[...mainTask]
       copytask.splice(i,1)    // array ko katne ka kaam krta hai splice ex ["apple", "mango","banana", "grapes"] then arr.splice(2,3) then remain arr is apple and mango 
       setMainTask(copytask)
  }
   let renderTask=<h2>No Task Availble</h2>;

if(mainTask.length>0){
   renderTask = mainTask.map((t, i)=>{
    return(
      <li key={i} className="flex justify-between items-center mb-7">    
       <div className="flex justify-between w-2/3">
      <h5 className="text-2xl font-semibold">{t.title}</h5>
      <h6 className="text-lg font-medium">{t.desc}</h6>
    </div>
    <button onClick={()=>{
      deleteHandler(i)    // automatically na chale isse bachne  k liye ham aisa likh rahe hain
    }}
     className="bg-red-800 text-white px-4 py-2 rounded font-bold">Delete</button>
    </li>

    )
   });
  }
  return ( 
    <>
    <h1 className="bg-black text-white p-5 text-5xl font-bold text-center">Pranshu's Todo List</h1>
    
    <form onSubmit={submitHandler}>      
      <input type="text" className="border-zinc-800 border-4 text-2xl m-5 px-5 py-2"
       placeholder="Enter Task Title Here"
       value ={title}
       onChange={(e)=>{
        settitle(e.target.value)
       }}

      />
       
       <input type="text" className="border-zinc-800 border-4 text-2xl m-5 px-5 py-2"
       placeholder="Enter Discription Here"
       value={desc}
       onChange={(e)=>{
         setdesc(e.target.value)
       }}
      />
        <button className="bg-black rounded text-white text-2xl font-bold h-12 w-40 ml-16 mt-0 px-2 py-2">Add Task</button>
         </form>
         <hr/>
         <div className="p-8 bg-slate-200">
           <ul>
            {renderTask}
           </ul>

         </div>

     
    
    </>
  );
}
export default page;