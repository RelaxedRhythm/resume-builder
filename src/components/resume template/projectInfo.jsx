

export function ProjectInfo({ projectInfo }) {
    return (
        <div className="projectinfo">
            <h2>Projects</h2>
            <hr />
            <div className="project">
                <div>
                     {
                    projectInfo.map((project, index) => (
                        <div className="project-div" key={index}>
                            <h3>{project.projectName}</h3>
                            <div>
                                <a href={`${project.liveLink}`}>Live</a>
                                <a href={`${project.gitHub}`}>GitHub</a>
                            </div>
                             <p>{project.description}</p>
                        </div>
                    ))
                }
                </div>

               

            </div>
           
        </div>
    )
}