import { useState } from "react";


export function PersonalInfoForm({ personalInfo, setPersonalInfo }) {
    const FormPersonalInfo = {
        name: '',
        phnum: '',
        linkedIn: '',
        gitHub: ''
    }
    const [formPersonalInfo, setFormPersonalInfo] = useState(FormPersonalInfo);

    function handleChange(e) {
        const { name, value } = e.target;
        setFormPersonalInfo(prev => ({
            ...prev,
            [name]: value
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        setPersonalInfo(formPersonalInfo);
    }

    return (
        <div>
            
            <form onSubmit={handleSubmit}>

                <label>Name</label>
                <input type="text" name="name" value={formPersonalInfo.name} onChange={handleChange} />
                <label>Phone Number</label>
                <input type="tel" name="phnum" value={formPersonalInfo.phnum} onChange={handleChange} />
                <label>LinkedIn</label>
                <input type="text" name="linkedIn" value={formPersonalInfo.linkedIn} onChange={handleChange} />
                <label>GitHub</label>
                <input type="text" name="gitHub" value={formPersonalInfo.gitHub} onChange={handleChange} />
                <button type="submit">Submit</button>

            </form>
        </div>

    )
}