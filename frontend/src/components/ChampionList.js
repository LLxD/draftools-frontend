import React from 'react'
import ChampionIcon from './ChampionIcon'

function ChampionList({ searchChampion, addChampion }) {
    return (
        <>

            <div className="row search-box border border-white rounded">
                {/* <h3 className="d-block w-100">{props.role}</h3> */}
                {searchChampion.map((champion, index) => (
                    <ChampionIcon addChampion={addChampion} key={index} nome={champion.name} tags={champion.tags} img={champion.square_image} loading={champion.loading_image} />)
                )}

            </div>
        </>
    )
}

export default ChampionList