import React from 'react'

function ChampionIcon(props) {

    let nome = props.nome;
    let tags = props.tags; //PLACEHOLDER
    let img = props.img;
    let loading = props.loading;
    let id = props.id
    let info = props.info
    let blueTeam = props.blueTeam
    
    let champion = {
        "nome":nome,
        "img":img,
        "tags":tags,
        "loading":loading,
        "id":id,
        "info":info
    }


    return (

        <div className="col-lg-2 col-6 mt-4">
            <div className="d-flex flex-column justify-content-center align-items-center">
                <button className="hidden-button" onClick={() => {props.addChampion(champion, blueTeam)}}>
                <h5>{nome}</h5>
                <img src={img} alt="champion-icon" className="champion-icon" />
                </button>
            </div>
        </div>
    )
}

export default ChampionIcon