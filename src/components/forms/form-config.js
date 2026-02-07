
export const Form_config = {
    personal: {
        title: "Personal Information",
        repeatable:false,
        fields: [
            {
                name: "fullname", label: "Full Name", type: "text", placeholder: "Enter your name"
            },
            {
                name: "email", label: "Email", type: "email", placeholder: "Enter your email"
            },
            {
                name: "linkedIn", label: "LinkedIn", type: "url", placeholder: "Enter your LinkedIn url"
            },
            {
                name: "gitHub", label: "GitHub", type: "url", placeholder: "Enter your GitHub url"
            },
            {
                name: "phNum", label: "Phone Num", type: "number", placeholder: "Enter your phNum"
            }
        ]
    },
    education: {
        title: "Education Information",
        repeatable:true,
        fields: [
            {
                name: "schoolName", label: "Institute Name", type: "text", placeholder: "Enter your Institute name"
            },
            {
                name: "educationLevel", label: "Degree/Class", type: "text", placeholder: "Enter your degree"
            },
            {
                name: "cgpa", label: "CGPA", type: "number", placeholder: "Enter your cgpa"
            }
        ]
    },
    project: {
        title: "Project Information",
        repeatable:true,
        fields: [
            {
                name: "projectName",label: "Project Name",type: "text", placeholder: "Enter your project name"
            },
            {
                name: "liveLink", label: "Live Link",type: "url", placeholder: "Enter your proejct link"
            },
            {
                name: "gitHubLink", label: "GitHub Link", type: "url", placeholder: "Enter your github repo"
            },
            {
                name: "description", label: "Description", type: "textArea", placeholder: "Enter your project description"
            },
        ]
    },
    experiance:{
        title:"Experiance Information",
        repeatable:true,
        fields:[
            {
                 name:"jobTitle",label:"Job Title" ,type:"text",placeholder:"Enter your Job Title" 
            },
            {
                name:"company",label:"Company Name",type:"text",placeholder:"Enter the company u work at"
            }
        ]
    }
}