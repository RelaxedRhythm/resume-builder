import { PersonalInfo } from "./personalInfo";
import { EducationInfo } from "./educationInfo";
import { ProjectInfo } from "./projectInfo";
import './resume.css'
export function Resume({personalInfo,setPersonalInfo,educationInfo,setEducationInfo , projectInfo,setProjectInfo}){
    return(
        <div className="resume-container" >

            <div className="personalinfo">
                <PersonalInfo personalInfo={personalInfo} setPersonalInfo={setPersonalInfo}/>
            </div>
            
            <div className="educationinfo">
                 <EducationInfo educationInfo={educationInfo} setEducationInfo={setEducationInfo} />
            </div>
           
            <div className="projectinfo">
                <ProjectInfo projectInfo={projectInfo} setProjectInfo={setProjectInfo}/>
            </div>
    
              
        </div>
    )
}