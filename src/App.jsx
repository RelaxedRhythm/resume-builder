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

  return (
    <div>
      <Resume personalInfo={personalInfo} 
              educationInfo={educationInfo} 
              projectInfo={projectInfo}
              setPersonalInfo={setPersonalInfo} 
              setEducationInfo={setEducationInfo} 
              setProjectInfo={setProjectInfo} />

      <Form personalInfo={personalInfo} 
            educationInfo={educationInfo} 
            projectInfo={projectInfo}
            setPersonalInfo={setPersonalInfo}  
            setEducationInfo={setEducationInfo} 
            setProjectInfo={setProjectInfo} />
    </div>
  )

}

export default App
