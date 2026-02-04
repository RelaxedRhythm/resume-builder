

export function EducationInfo({educationInfo,setEducationInfo}){
    return(
        <div>
            <h2>Education</h2>
            <hr />
            <h3>{educationInfo.educationLevel}</h3>            
                <p>{educationInfo.schoolName}</p>
           <p>CGPA: {educationInfo.cgpa}</p> 
           
        </div>
    )
}