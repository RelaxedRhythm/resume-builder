import { useState } from "react"
import './preloader.css'

export function Preloader(){

    

    return (
        <div className="preloader">
            <h1>Hello!!</h1>
            <h1>Welcome to the Resume Builder</h1>

            <div className="loader"></div>
        </div>
    )
}