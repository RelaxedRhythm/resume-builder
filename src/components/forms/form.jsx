import { useState } from "react";
import { EducationInfoForm } from "./educationInfoForm";
import { PersonalInfoForm } from "./personalInfoForm";
import { ProjectForm } from "./projectForm";


export function Form({ personalInfo, educationInfo, projectInfo, setEducationInfo, setPersonalInfo, setProjectInfo,formVisible,setFormVisible }) {
    const [state,setState]=useState("personal");
    const handleFormState=(text)=>{
        console.log(text);
        if(text=='education') setState("education");
        else if(text=='project') setState("project");
        else setState("personal");
    };

    function handleClose(){
        setFormVisible(false);    
    }

    if(!formVisible) return null;
    
    return (
        <div>
            <button onClick={handleClose}>Close</button>
            <button onClick={()=>handleFormState("personal")}>Personal</button>
            <button onClick={()=>handleFormState("education") }>Education</button>
            <button onClick={()=>handleFormState("project") }> Projects</button>
            {
                (state=="personal" && <PersonalInfoForm personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} /> )   
            }
           
            {
                (state=="education" && <EducationInfoForm educationInfo={educationInfo} setEducationInfo={setEducationInfo} />)   
            }
            {
                state=="project" &&  <ProjectForm projectInfo={projectInfo} setProjectInfo={setProjectInfo}/> 
            }
           
        </div>


    )
}