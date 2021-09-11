import React, { useState } from 'react';
import ChampionIcon from './ChampionIcon';

function Message({ champion_suggestion, displayAlert, addChampion, compAnalysis, compType}) {

    // const [champion, setChampion] = useState(champion_suggestion[0]);

    // const refresh = () => {
    //     let item = champion_suggestion[Math.floor(Math.random() * champion_suggestion.length)];
    //     setChampion(item);
    // };

    return (
        <div style={{width:"200px"}}className={`mt-5 float-left alert ${displayAlert}`} role="alert">
            <h3 className="text-primary">Feedback de Composição:</h3>
            <h5 className="text-primary">Análise da composição:</h5>
            <h6 className="text-white">{compAnalysis}</h6>
            <h5 className="text-primary">Estratégia da composição:</h5>
            <h6 className="text-white">{compType}</h6>
                {/* <div className="d-flex justify-content-center row border border-white rounded pb-4">
                    <ChampionIcon addChampion={addChampion} key={champion.key} id={champion.key} nome={champion.name} tags={""} loading={champion.loading_image} img={champion.square_image} />
                </div> */}
                {/* <button className="btn btn-block" onClick={() => refresh()}><i className="fa fa-refresh"></i></button> */}
            </div>
    );
}

export default Message;