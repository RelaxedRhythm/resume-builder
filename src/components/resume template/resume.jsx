import { PersonalInfo } from "./personalInfo";
import { EducationInfo } from "./educationInfo";
import { ProjectInfo } from "./projectInfo";

export function Resume({personalInfo,setPersonalInfo,educationInfo,setEducationInfo , projectInfo,setProjectInfo}){
    return(
        <div>
            <PersonalInfo personalInfo={personalInfo} setPersonalInfo={setPersonalInfo}/>
            <EducationInfo educationInfo={educationInfo} setEducationInfo={setEducationInfo} />
            <ProjectInfo projectInfo={projectInfo} />
        </div>
    )
}