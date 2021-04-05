import React from 'react'
import Champion from './Champion'

const Team = (props) => {

if (props.blue === "1") {
    return (
    <>
    {/* Start: Team */}
    <div className="d-flex col justify-content-around blue-side mr-3 ml-3">
      <Champion role="Top"/>
      <Champion role="Jg"/>
      <Champion role="Mid"/>
      <Champion role="Adc"/>
      <Champion role="Supp"/>
    </div>{/* End: Team */}
    </>
    )
}
else{
        return (
    <>
    {/* Start: Team */}
    <div className="d-flex col justify-content-around red-side mr-3">
      <Champion role="Top"/>
      <Champion role="Jg"/>
      <Champion role="Mid"/>
      <Champion role="Adc"/>
      <Champion role="Supp"/>
    </div>{/* End: Team */}
    </>
    )
}

}

export default Team
