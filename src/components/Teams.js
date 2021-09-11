import Champion from "./Champion";
import { useDrop } from 'react-dnd';


function Teams({ blueTeam, redTeam, removeChampion }) {


    // const [, dropRed] = useDrop({
    //     accept: 'CHAMPION',
    //     drop() { //isso aqui vai chegar lá no dropResult do ChampionIcon
    //         return { target: "red" };
    //     },
    //     collect: (monitor) => ({
    //         isOverRed: monitor.isOver(),
    //     }),
    // });

    const [, dropBlue] = useDrop({
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
            <div className="container " id="champion-select">
                <div className="row mr-2 ml-2">
                    <div className="col">
                        <div className="row">
                            <div className="d-flex col justify-content-center align-items-center blue-side " ref={dropBlue}>
                                {(blueTeam.length === 0) && (<h1 className="text-white">Coloque campeões aqui!</h1>)}
                                {blueTeam.map((champion, index) => (
                                    <Champion removeChampion={removeChampion} position={index} team="blue" key={champion.id} index={champion.id} img={champion.loading} name={champion.nome}  role="Top" />
                                ))}
                            </div>

                            {/* <div className="d-flex col justify-content-center align-items-center red-side mr-3" ref={dropRed}>
                                {redTeam.map((champion, index) => (
                                    <Champion removeChampion={removeChampion} position={index} team="red" key={champion.id} index={champion.id} img={champion.loading} name={champion.nome} role="Top" />
                                ))}
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Teams;