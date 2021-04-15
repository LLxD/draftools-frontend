import React from 'react'
import ChampionIcon from './ChampionIcon'
import Search from './Search';

function ChampionList({ champions, addChampion }) {
  return (
<>
{/* Start: Search */}
<div className="container">
  <Search/>
  <div className="row search-box border border-white rounded">
    {/* <h3 className="d-block w-100">{props.role}</h3> */}
    {champions.map((champion, index) => index < 100 && (
      <ChampionIcon key={index} nome={champion.id} tags="" img={champion.thumbnailUrl}/>)
      )}
</div>

</div>
{/* End: Search */}
</>
    )
}

export default ChampionList