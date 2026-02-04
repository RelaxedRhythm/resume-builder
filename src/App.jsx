import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Resume } from './components/resume template/resume'
import { Form } from './components/forms/form'
function App() {
  const initialPersonalInfo = {
    name: 'Rhythm',
    phnum: '7924879284',
    email:'abc@gmail.com',
    linkedIn: 'kshfhahdp',
    gitHub: 'fgadsfgkdsf'
  }
  const initialEducationInfo = {
    schoolName: "Sacred Heart",
    educationLevel: "12th",
    cgpa: "9.7"
  }
  const initialProjectInfo = {
    projectName: "weather app",
    description: "something something something something something is better than nothing",
    date: "23-12-2005",
    gitHubLink: "dfuishfasi",
    liveLink: "djagfiugo"
  }
  const [personalInfo, setPersonalInfo] = useState(initialPersonalInfo);
  const [educationInfo, setEducationInfo] = useState(initialEducationInfo);
  const [projectInfo, setProjectInfo] = useState(initialProjectInfo);

  const [showForm, setShowForm] = useState(false);
  console.log(showForm);
  // function showForm() {
  //   setFormVisible(!formVisible);
  //   console.log(formVisible);
  // }
  return (

    <div>
      <div >
        <button className={`form-button-class ${showForm?"left":"centre"}`} onClick={() => setShowForm(!showForm)}>Form</button>
      </div>
      <div className={`container ${showForm ? "split" : "centre"} `}>


        <div className={`resume-class ${showForm ? "shift-left" : ""}`}>
          <Resume personalInfo={personalInfo}
            educationInfo={educationInfo}
            projectInfo={projectInfo}
            setPersonalInfo={setPersonalInfo}
            setEducationInfo={setEducationInfo}
            setProjectInfo={setProjectInfo} />
        </div>




        <div className={`form-class ${showForm ? "show" : "hide"}`}>
          <Form personalInfo={personalInfo}
            educationInfo={educationInfo}
            projectInfo={projectInfo}
            setPersonalInfo={setPersonalInfo}
            setEducationInfo={setEducationInfo}
            setProjectInfo={setProjectInfo}
            formVisible={showForm}
            setFormVisible={setShowForm} />
        </div>



      </div>
    </div>

  )

}

export default App
