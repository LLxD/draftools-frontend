import React, { useState, useEffect } from "react";
import ChampionIcon from "./ChampionIcon";

function Message({
  champion_suggestion,
  title,
  displayAlert,
  floatPosition,
  addChampion,
  response,
}) {
  const [compAnalysis, setCompAnalysis] = useState("");
  const [compType, setCompType] = useState("");
  const [attackSum, setAttackSum] = useState(0);
  const [magicSum, setMagicSum] = useState(0);
  const [defenseSum, setDefenseSum] = useState(0);

  useEffect(() => {
    setCompAnalysis(response[0]);
    setCompType(response[1]);
    setAttackSum(response[2]);
    setMagicSum(response[3]);
    setDefenseSum(response[4]);
  }, [response]);

  // const [champion, setChampion] = useState(champion_suggestion[0]);

  // const refresh = () => {
  //     let item = champion_suggestion[Math.floor(Math.random() * champion_suggestion.length)];
  //     setChampion(item);
  // };

  return (
    <div
      style={{ width: "200px" }}
      className={`mt-5 float-${floatPosition} alert ${displayAlert}`}
      role="alert"
    >
      <h3 className="text-primary">{title}</h3>
      {compAnalysis.length !== 0 && floatPosition === "left" && (
        <>
          <h5 className="text-primary">Análise da composição:</h5>
          <h6 className="text-white">{compAnalysis}</h6>
        </>
      )}
      {compType.length !== 0 && floatPosition === "left" && (
        <>
          <h5 className="text-primary">Estratégia da composição:</h5>
          <h6 className="text-white">{compType}</h6>
        </>
      )}
      {attackSum.length !== 0 && floatPosition === "right" && (
        <>
          <h5 className="text-primary">Soma de Atributos:</h5>
          <h6 className="text-white">Ataque: {attackSum}</h6>
          <h6 className="text-white">Magia: {magicSum}</h6>
          <h6 className="text-white">Defesa: {defenseSum}</h6>
        </>
      )}
      {/* <div className="d-flex justify-content-center row border border-white rounded pb-4">
                    <ChampionIcon addChampion={addChampion} key={champion.key} id={champion.key} nome={champion.name} tags={""} loading={champion.loading_image} img={champion.square_image} />
                </div> */}
      {/* <button className="btn btn-block" onClick={() => refresh()}><i className="fa fa-refresh"></i></button> */}
    </div>
  );
}

export default Message;
