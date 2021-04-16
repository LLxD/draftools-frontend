import React from 'react'
import { useDrag } from 'react-dnd'

function ChampionIcon(props) {

    let nome = props.nome;
    let tags = props.tags;
    let img = props.img;

    const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
        type: 'CHAMPION', nome: { nome }, img: { img },
        // The collect function utilizes a "monitor" instance (see the Overview for what this is)
        // to pull important pieces of state from the DnD system.
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    }))


    return (

        <div className="col-2 mt-4" ref={drag}>
            <div className="d-flex flex-column justify-content-center align-items-center">
                <h5>{nome}</h5>
                <img src={img} alt="champion-icon" className="champion-icon" />
                <h5>{tags}</h5>
            </div>
        </div>
    )
}

export default ChampionIcon
