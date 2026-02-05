import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Resume } from './components/resume template/resume'
import { Form } from './components/forms/form'
import { Preloader } from './components/preloader/preloader'

function App() {
  const initialResume = {
    personalInfo: {
      name: 'Rhythm',
      phnum: '7924879284',
      email: 'abc@gmail.com',
      linkedIn: 'kshfhahdp',
      gitHub: 'fgadsfgkdsf'
    },
    educationInfo: [{
      schoolName: "Sacred Heart",
      educationLevel: "12th",
      cgpa: "9.7"
    }],
     projectInfo:[{
    projectName: "weather app",
    description: "something something something something something is better than nothing",
    date: "23-12-2005",
    gitHubLink: "dfuishfasi",
    liveLink: "djagfiugo"}]
    ,
    experiance:[{
      jobTitle:"Front-end Developer",
      company:"XYZ pvt. ltd.",
      
    }],
    achivements:""
  
  }

  const [resume, setResume] = useState(initialResume);
  const [showForm, setShowForm] = useState(false);
  // console.log(showForm);
  // function showForm() {
  //   setFormVisible(!formVisible);
  //   console.log(formVisible);
  // }

  //preloader 
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000)
  }, [])

  return (

    <div>
      {
        loading ?
          (<Preloader />
          ) : (
            <div>
              <div >

                <button className={`form-button-class ${showForm ? "left" : "centre"}`} onClick={() => setShowForm(!showForm)}>Form</button>
              </div>
              <div className={`container ${showForm ? "split" : "centre"} `}>


                <div className={`resume-class ${showForm ? "shift-left" : ""}`}>
                  <Resume resume={resume} />
                </div>




                <div className={`form-class ${showForm ? "show" : "hide"}`}>
                  <Form resume={resume}
                  setResume={setResume}
                    formVisible={showForm}
                    setFormVisible={setShowForm} />
                </div>



              </div>
            </div>)

      }

    </div>)
}



export default App
