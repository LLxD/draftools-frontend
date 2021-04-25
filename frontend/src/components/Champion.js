import React from 'react'

const Champion = (props) => {
    return (
        <>
            {/* Start: Champion */}
            <div className="mr-3 ml-3">
                <button onClick={() => props.removeChampion(props.position, props.team)} className="btn remove-champion text-white fa fa-times" type="button"></button>
                <img className="champion" src={props.img} alt="champion img" />
                <h1 className="text-center text-white">{props.name}</h1>
            </div>
            {/* End: Champion */}
        </>
    )
}

export default Champion
