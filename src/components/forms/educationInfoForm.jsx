import { useState } from "react";


export function EducationInfoForm({educationInfo,setEducationInfo}){
    const initialInfo={
    schoolName:"",
    educationLevel:"",
    cgpa:""
  }
    const [formInfo,setFormInfo]=useState(initialInfo)
    function handleChange(e){
        const {name,value} =e.target;
        setFormInfo(prev=>({
            ...prev,
            [name]:value
        }));
  }

  function handleSubmit(e){
    e.preventDefault();
    setEducationInfo(formInfo);
  }
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Degree/Class</label>
            <input name="educationLevel" value={formInfo.educationLevel} type="text" placeholder="enter degree" onChange={handleChange} />
            <label htmlFor="">School/College Name</label>
            <input name="schoolName" value={formInfo.schoolName} type="text" placeholder="Enter school/college name" onChange={handleChange}/>
            <label htmlFor="">CGPA</label>
            <input name="cgpa" value={formInfo.cgpa} type="text" placeholder="CGPA" onChange={handleChange}/>
            <button type="submit">Submit</button>
        </form>
    )
}