import { useState } from "react";
import { EducationInfoForm } from "./educationInfoForm";
import { PersonalInfoForm } from "./personalInfoForm";
import { ProjectForm } from "./projectForm";
import './form.css';

export function Form({ personalInfo, educationInfo, projectInfo, setEducationInfo, setPersonalInfo, setProjectInfo, formVisible, setFormVisible }) {
    const sections = [
        { id: "personal", label: "Personal" },
        { id: "education", label: "Education" },
        { id: "project", label: "Projects" }
    ]
    const form_map = {
        personal: PersonalInfoForm,
        education: EducationInfoForm,
        project: ProjectForm

    }
    const [state, setState] = useState("personal");
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
                {ActiveForm && <ActiveForm personalInfo={personalInfo}
                    setPersonalInfo={setPersonalInfo}
                    educationInfo={educationInfo}
                    setEducationInfo={setEducationInfo}
                    projectInfo={projectInfo}
                    setProjectInfo={setProjectInfo}
                />}
            </div>

        </div>


    )
}