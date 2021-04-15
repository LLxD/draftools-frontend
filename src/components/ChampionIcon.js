import React from 'react'
import {useDraggable} from '@dnd-kit/core';
import {CSS} from '@dnd-kit/utilities';



function ChampionIcon(props){
    let nome = props.nome;
    let tags = props.tags;
    let img = props.img

  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: nome,
  });
  const style = {
    transform: CSS.Translate.toString(transform),
  };


    return (

          <div className="col-2 mt-4"  ref={setNodeRef} style={style} {...listeners} {...attributes}>
<div className="d-flex flex-column justify-content-center align-items-center">
    <h5>{nome}</h5>
            <img src={img} alt="champion-icon" className="champion-icon"/>
    <h5>{tags}</h5>
        </div>
        </div>
    )
}

export default ChampionIcon
