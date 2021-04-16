import React from 'react'
import ChampionIcon from './ChampionIcon'

function ChampionList({ searchChampion, addChampion }) {
    return (
        <>

            <div className="row search-box border border-white rounded">
                {/* <h3 className="d-block w-100">{props.role}</h3> */}
                {searchChampion.map((champion, index) => index < 100 && (
                    <ChampionIcon addChampion={addChampion} key={index} nome={champion.id} tags="" img={champion.thumbnailUrl} />)
                )}

            </div>
        </>
    )
}

export default ChampionList