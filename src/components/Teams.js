import React, { useEffect, useState } from 'react';
import Champion from "./Champion";
import { useDrop } from 'react-dnd';


function Teams({ blueTeam, redTeam, removeChampion }) {


    const [isOverRed, dropRed] = useDrop({
        accept: 'CHAMPION',
        drop() { //isso aqui vai chegar lá no dropResult do ChampionIcon
            return { target: "red" };
        },
        collect: (monitor) => ({
            isOverRed: monitor.isOver(),
        }),
    });

    const [isOverBlue, dropBlue] = useDrop({
        accept: 'CHAMPION',
        drop() { //isso aqui vai chegar lá no dropResult do ChampionIcon
            return { target: "blue" };
        },
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
                            <div className="d-flex col justify-content-around blue-side mr-3 ml-3" ref={dropBlue}>
                                {blueTeam.map((champion, index) => (
                                    // pq nao esta passando as informacoes do que adiciono?
                                    <Champion removeChampion={removeChampion} team="blue" key={index} img={champion.img} name={champion.nome} role="Top" />
                                ))}
                            </div>

                            <div className="d-flex col justify-content-around red-side mr-3" ref={dropRed}>
                                {redTeam.map((champion, index) => (
                                    <Champion removeChampion={removeChampion} team="red" key={index} img={champion.img} name={champion.nome} role="Top" />
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