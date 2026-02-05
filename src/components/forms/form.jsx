import { useState } from "react";
import {Form_config} from './form-config';
import { DynamicForm } from "./dynamicForm";
import './form.css'

export function Form({ resume,setResume, formVisible, setFormVisible }) {
    const sections = [
        { id: "personal", label: "Personal",key:"personalInfo" },
        { id: "education", label: "Education", key:"educationInfo" },
        { id: "project", label: "Projects", key:"projectInfo"},
        { id: "experiance", label: "Experiance", key:"experianceInfo"}
    ]
    
    const [state, setState] = useState("personal");

     Form_config[state];
     const fields=Form_config[state].fields;

     const activeSection=sections.find(s=>s.id===state)
    const ActiveForm = form_map[state]; //storing the cuurent form to be rendered in in activeForm

    function handleClose() {
        setFormVisible(false);
    }

    if (!formVisible) return null;

    return (
        <div>
            <div className="form-btn-div">
                {
                sections.map((section) => (

                    <button key={section.id} onClick={() => setState(section.id)} className="form-btn">{section.label}</button>
                ))
            }
            </div>
            
            <button className="close-btn" onClick={handleClose}>X</button>
            <div className="form-comp">
                <DynamicForm fields={fields}
                data={resume[activeSection.key]}
                onSubmit={(name,value)=>setResume(prev=>({
                    ...prev,
                    [activeSection.key]:{
                        ...prev[activeSection.key],
                    [name]:value}
                }))}
                
                />
            </div>

        </div>


    )
}