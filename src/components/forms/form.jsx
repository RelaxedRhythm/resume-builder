import { EducationInfoForm } from "./educationInfoForm";
import { PersonalInfoForm } from "./personalInfoForm";
import { ProjectForm } from "./projectForm";


export function Form({ personalInfo, educationInfo, projectInfo, setEducationInfo, setPersonalInfo, setProjectInfo }) {
    return (
        <div>
            <PersonalInfoForm personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} />
            <EducationInfoForm educationInfo={educationInfo} setEducationInfo={setEducationInfo} />
            <ProjectForm projectInfo={projectInfo} setProjectInfo={setProjectInfo}/>    
        </div>


    )
}