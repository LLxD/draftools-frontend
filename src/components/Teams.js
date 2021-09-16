import Champion from "./Champion";


function Teams({ blueTeam, removeChampion, transition }) {




    return (
        <>
            {/* Start: Teams */}
            <div className="container p-0" id="champion-select">
                <div className="row mx-0 lg:mx-2">
                    <div className="col">
                        <div className="row">
                            <div className={`d-flex col justify-content-center align-items-center blue-side ${transition}`}>
                                {(blueTeam.length === 0) && (<h1 className="text-white">Coloque campeões aqui!</h1>)}
                                {blueTeam.map((champion, index) => (
                                    <Champion removeChampion={removeChampion} position={index} team="blue" key={champion.id} index={champion.id} img={champion.loading} name={champion.nome} />
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