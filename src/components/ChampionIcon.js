import React from 'react'

const ChampionIcon = (props) => {

let nome = props.nome;
let tags = props.tags;
let img = props.img

    return (
          <div className="col-2 mt-4">
<div className="d-flex flex-column justify-content-center align-items-center">
    <h5>{nome}</h5>
            <img src={img} alt="champion-icon" className="champion-icon"/>
    <h5>{tags}</h5>
        </div>
        </div>
    )
}

export default ChampionIcon
