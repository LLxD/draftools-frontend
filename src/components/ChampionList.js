import React from 'react'
import ChampionIcon from './ChampionIcon'

function ChampionList({ searchChampion, addChampion, blueTeam }) {
    return (
        <>

            <div className="row search-box border border-white rounded">
                {/* <h3 className="d-block w-100">{props.role}</h3> */}
                {searchChampion.map((champion) => (
                    <ChampionIcon addChampion={addChampion} key={champion.key} id={champion.key} nome={champion.name} tags={champion.tags} img={champion.square_image} loading={champion.loading_image} info={champion.info} blueTeam={blueTeam} />)
                )}

            </div>
        </>
    )
}

export default ChampionList