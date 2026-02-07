import { useState } from "react";
import { Form_config } from './form-config';
import { DynamicForm } from "./dynamicForm";
import './form.css'

export function Form({ resume, setResume, formVisible, setFormVisible }) {
    const sections = [
        { id: "personal", label: "Personal", key: "personalInfo" },
        { id: "education", label: "Education", key: "educationInfo" },
        { id: "project", label: "Projects", key: "projectInfo" },
        { id: "experiance", label: "Experiance", key: "experianceInfo" }
    ]

    // A state key is just the property name inside your state object.
    // personalInfo → section key
    // fullName, email, phone → state keys inside that section
    //therefore the names of the keys and the resume object need to be the same
    const [state, setState] = useState("personal");

    Form_config[state];

    const activeSection = sections.find(s => s.id === state)

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
                <DynamicForm resume={resume} setResume={setResume} sectionConfig={Form_config[state]} sectionKey={activeSection.key}
                />
            </div>

        </div>


    )
}