import { PersonalInfo } from "./personalInfo";
import { EducationInfo } from "./educationInfo";
import { ProjectInfo } from "./projectInfo";
import './resume.css'
import { ExperianceInfo } from "./experiance";
export function Resume({resume}){
    return(
        <div className="resume-container" >

            <div className="personalinfo">
                <PersonalInfo personalInfo={resume.personalInfo}/>
            </div>
            
            <div className="educationinfo">
                 <EducationInfo educationInfo={resume.educationInfo} />
            </div>
            <div className="experianceinfo">
                <ExperianceInfo experianceInfo={resume.experianceInfo}/>
            </div>
            <div className="projectinfo">
                <ProjectInfo projectInfo={resume.projectInfo} />
            </div>
    
              
        </div>
    )
}