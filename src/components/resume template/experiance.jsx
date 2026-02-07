

export function ExperianceInfo({experianceInfo}){

    return(
        <div>
            <h2>
                Experiance
            </h2>
            <hr />
            {
                experianceInfo.map((experiance,index)=>(
                    <div className="experiance-div">
                        <h3>{experiance.jobTitle}</h3>
                        <p>{experiance.company}</p>
                    </div>
                ))
            }
        </div>
    )
}