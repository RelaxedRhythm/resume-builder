
//name email number linkedIn(link) github(link) 
export function PersonalInfo({ personalInfo}) {

    return (
        <div >
            <h1>{personalInfo.fullname}</h1>
            <ul>
                <li><p>{personalInfo.phNum}</p></li>
                <li><a href={`${personalInfo.email}`}>
                    {personalInfo.email}</a></li>
                <li><a href={`${personalInfo.linkedIn}`}>LinkedIn</a></li>
                <li><a href={`${personalInfo.gitHub}`}>GitHub</a></li>
            </ul>
        </div>
    )
}