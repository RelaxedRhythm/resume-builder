import { PersonalInfo } from "./personalInfo";
import { EducationInfo } from "./educationInfo";
import { ProjectInfo } from "./projectInfo";
import './resume.css'
export function Resume({personalInfo,setPersonalInfo,educationInfo,setEducationInfo , projectInfo,setProjectInfo}){
    return(
        <div className="resume-container" >
            <PersonalInfo personalInfo={personalInfo} setPersonalInfo={setPersonalInfo}/>
            <hr />
            <EducationInfo educationInfo={educationInfo} setEducationInfo={setEducationInfo} />
            <hr />
            <ProjectInfo projectInfo={projectInfo} setProjectInfo={setProjectInfo}/>
            <hr />
        </div>
    )
}