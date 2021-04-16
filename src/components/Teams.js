import React from "react";
import Champion from "./Champion";
import { useDrop } from 'react-dnd';


function Teams({ blueTeam, redTeam, onDrop }) {

    const [isOverRed, dropRed] = useDrop({
        accept: 'CHAMPION',
        drop: onDrop,
        collect: (monitor) => ({
            isOverRed: monitor.isOver(),
        }),
    });

    const [isOverBlue, dropBlue] = useDrop({
        accept: 'CHAMPION',
        drop: onDrop,
        collect: (monitor) => ({
            isOverBlue: monitor.isOver(),
        }),
    });

    // isOverRed e isOverBlues sao variaveis para analisar se estamos sobre vermelho ou azul

    return (
        <>
            {/* Start: Teams */}
            <div className="container-fluid" id="champion-select">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <div className="d-flex col justify-content-around blue-side mr-3 ml-3" ref={dropRed}>
                                {blueTeam.map((champion, index) => (
                                    // pq nao esta passando as informacoes do que adiciono?
                                    <Champion img={champion.thumbnailUrl} name={champion.nome} role="Top" />
                                ))}
                            </div>

                            <div className="d-flex col justify-content-around red-side mr-3" ref={dropBlue}>
                                {redTeam.map((champion, index) => (
                                    <Champion img={champion.thumbnailUrl} name={champion.nome} role="Top" />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Teams;
