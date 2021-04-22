import React from 'react'
import { useDrag } from 'react-dnd'

function ChampionIcon(props) {

    let nome = props.nome;
    let tags = props.tags; //PLACEHOLDER
    let img = props.img;

    const [, drag] = useDrag(() => ({
        type: 'CHAMPION',
        item: {
            nome,
            img,
            tags,
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
                <h5>{nome}</h5>
                <img src={img} alt="champion-icon" className="champion-icon" />
                <h6>{tags}</h6>
            </div>
        </div>
    )
}

export default ChampionIcon