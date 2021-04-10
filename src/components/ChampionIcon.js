import React from 'react'

const ChampionIcon = (props) => {

let nome = props.nome;
let tags = props.tags;

    return (
          <div className="col-2 mt-4">
<div class="d-flex flex-column justify-content-center align-items-center">
    <h5>{nome}</h5>
            <img src="https://1.bp.blogspot.com/-R5ozICNl7AY/Xd2iaJ1x8wI/AAAAAAABb1c/Lkeeq4TPd7c7Hn2ThLeJe1fDE8dq5p2LgCLcBGAsYHQ/s1600/523.png" alt="champion-icon" class="champion-icon"/>
    <h5>{tags}</h5>
        </div>
        </div>
    )
}

export default ChampionIcon
