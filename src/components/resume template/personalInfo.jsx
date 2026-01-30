
//name email number linkedIn(link) github(link) 
export function PersonalInfo({personalInfo,setPersonalInfo}){

    return(
        <div>
            <h2>{personalInfo.name}</h2>
            <ul>
                {/* <li><h3>{personalInfo.email}</h3></li> */}
                <li><h3>{personalInfo.phnum}</h3></li>
                <li><h3>{personalInfo.linkedIn}</h3></li>
                <li><h3>{personalInfo.gitHub}</h3></li>
            </ul>
        </div>
    )
}