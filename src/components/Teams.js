import React from 'react'
import Champion from './Champion'


function Teams({ blueTeam, redTeam }) {
  return (
       <>
{/* Start: Teams */}
<div className="container-fluid" id="champion-select">
  <div className="row">
    <div className="col">
      <div className="row">
    {/* Start: Blue Team */}
    <div className="d-flex col justify-content-around blue-side mr-3 ml-3">
        {blueTeam.map((champion, index) => (
            <Champion role="Top"/>
        ))}
    </div>{/* End: Blue Team */}
    {/* Start: Red Team */}
    <div className="d-flex col justify-content-around red-side mr-3">
        {redTeam.map((champion, index) => (
            <Champion role="Top"/>
        ))}
    </div>{/* End: Red Team */}


      </div></div></div></div>
</>
    )
}
export default Teams
