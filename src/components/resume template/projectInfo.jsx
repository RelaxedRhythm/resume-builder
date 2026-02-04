

export function ProjectInfo({ projectInfo, setProjectInfo }) {
    return (
        <div className="projectinfo">
            <h2>Projects</h2>
            <hr />
            <div className="project">
                <h3>{projectInfo.projectName}</h3>
                <div>
                    <a href={`${projectInfo.liveLink}`}>Live</a>
                    <a href={`${projectInfo.gitHub}`}>GitHub</a>
                </div>

            </div>
            <p>{projectInfo.description}</p>
        </div>
    )
}