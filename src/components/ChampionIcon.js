import React from 'react'
import { useDrag } from 'react-dnd'

function ChampionIcon(props) {

    let nome = props.nome;
    let tags = props.tags; //PLACEHOLDER
    let img = props.img;
    let loading = props.loading;
    let id = props.id
    let info = props.info

    
    let champion = {
        "nome":nome,
        "tags":tags,
        "img":img,
        "loading":loading,
        "id":id,
        "info":info
    }
    
    const [, drag] = useDrag(() => ({
        type: 'CHAMPION',
        item: {
            nome,
            img,
            tags,
            loading,
            id,
            info
        },

        end: (item, monitor) => {
            const dropResult = monitor.getDropResult();
            if (item && dropResult) {
                props.addChampion(item, dropResult.target);
            }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    }))
    return (

        <div className="col-2 mt-4" ref={drag}>
            <div className="d-flex flex-column justify-content-center align-items-center">
                <button style={{background:"none",border:"none"}} onClick={() => props.addChampion(champion, "blue")}>
                <h5>{nome}</h5>
                <img src={img} alt="champion-icon" className="champion-icon" />
                </button>
            </div>
        </div>
    )
}

export default ChampionIcon