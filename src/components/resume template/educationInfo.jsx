

export function EducationInfo({ educationInfo }) {
    return (
        <div>
            <h2>Education</h2>
            <hr />
            {
                educationInfo.map((education, index) => (
                    <div className="education-div">
                        <ul className="education-list">
                            <li><h3>{education.educationLevel}</h3></li>
                            <li><p>{education.schoolName}</p></li>
                            <li><p>CGPA: {education.cgpa}</p></li>
                        </ul>
                        
                        
                        
                    </div>
                ))
            }



        </div >
    )
}