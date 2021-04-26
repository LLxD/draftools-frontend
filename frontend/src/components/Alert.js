import React, { useState } from 'react';
import ChampionIcon from './ChampionIcon';

function Message({ champion_suggestion, type, addChampion }) {

    const [champion, setChampion] = useState(champion_suggestion[0]);

    const refresh = () => {
        let item = champion_suggestion[Math.floor(Math.random() * champion_suggestion.length)];
        setChampion(item);
    };

    return (
        <div className={`mt-5 alert alert-${type}`} role="alert">
            <h4 className="text-dark">Sugestões de Campeões:</h4>
            <div className="container">
                <div className="d-flex justify-content-center row border border-white rounded pb-4">
                    <ChampionIcon addChampion={addChampion} key={champion.key} id={champion.key} nome={champion.name} tags={""} img={champion.square_image} />
                </div>
                <button className="btn btn-block" onClick={() => refresh()}><i class="fa fa-refresh"></i></button>
            </div>
        </div>
    );
}

export default Message;