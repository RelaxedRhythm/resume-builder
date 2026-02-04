import { useState } from "react"


export function ProjectForm({ projectInfo, setProjectInfo }) {
    const initialInfo = {
        projectName: "",
        description: "",
        date: "",
        gitHubLink: "",
        liveLink: ""
    }

    const [formInfo, setFormInfo] = useState(initialInfo);

    function onHandleChange(e) {
        const { name, value } = e.target;
        setFormInfo(prev => ({
            ...prev,
            [name]: value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault();
        setProjectInfo(formInfo);
    }
    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <label htmlFor="">Project Name</label>
                <input type="text" name="projectName" value={formInfo.projectName} placeholder="Enter Project Name" onChange={onHandleChange} />
            </fieldset>

            <fieldset>
                <label htmlFor="">Description</label>
                <input type="textArea" name="description" value={formInfo.description} placeholder="Enter Project description" onChange={onHandleChange} />
            </fieldset>

            <fieldset>
                <label htmlFor="">Date of Project</label>
                <input type="text" name="date" value={formInfo.date} placeholder="Enter date" onChange={onHandleChange} />
            </fieldset>

            <fieldset>
                <label htmlFor="">GitHub Link</label>
                <input type="url" name="gitHubLink" value={formInfo.gitHubLink} placeholder="Enter Project gitHub" onChange={onHandleChange} />
            </fieldset>

            <fieldset>
                <label htmlFor="">Live Link</label>
                <input type="url" name="liveLink" value={formInfo.liveLink} placeholder="Enter Project link" onChange={onHandleChange} />
            </fieldset>

            <button type="submit">Submit</button>
        </form>
    )
}