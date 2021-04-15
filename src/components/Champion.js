import React from 'react'

const Champion = (props) => {
    return (
<>
{/* Start: Champion */}
<div>
    <button className="btn add-champion text-white" type="button">+</button>
    <img className="champion" src={props.img} alt="champion img"/>
    <h1 className="text-center text-white">{props.role}</h1>
</div>
{/* End: Champion */}
</>
    )
}

export default Champion
