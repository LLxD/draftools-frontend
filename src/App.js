import Navbar from "./components/Navbar";
import Teams from "./components/Teams";
import ChampionList from "./components/ChampionList";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Search from "./components/Search";
import Alert from "./components/Alert";

function App() {
  const [blueTeam, setBlueTeam] = useState([]);
  const [redTeam, setRedTeam] = useState([]);
  const [champions, setChampions] = useState([]);
  const [searchChampion, setSearchChampions] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [displayAlert, setDisplayAlert] = useState("d-none");
  const [response, setResponse] = useState([]);
  const [transition, setTransition] = useState("");

  const loadChampions = () => {
    axios.get("https://draftools.herokuapp.com/champions").then((response) => {
      setChampions(response.data);
      setSearchChampions(response.data);
    });
  };

  useEffect(() => {
    loadChampions();
  }, []);

  useEffect(() => {
    if (searchString) {
      const filtrados = champions.filter((objeto) =>
        objeto.name.toLowerCase().includes(searchString.toLowerCase())
      );
      setSearchChampions(filtrados);
    } else {
      setSearchChampions(champions);
    }
  }, [searchString, champions]);

  const addChampion = (champion, team) => {
    if(team.length < 5 && !team.some(champ => champ.nome === champion.nome)){
      setBlueTeam([...team, champion])
    }
    }
  

  const removeChampion = (index, team) => {
    switch (team) {
      case "blue":
        setBlueTeam((blueTeam) =>
          blueTeam.filter((_champ, i) => i !== Number(index))
        );
        break;
      case "red":
        setRedTeam((redTeam) =>
          redTeam.filter((_champ, i) => i !== Number(index))
        );
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (blueTeam.length !== 0) {
      axios
        .post("https://draftools.herokuapp.com/result", blueTeam)
        .then((response) => {
          setDisplayAlert("");
          setResponse(response.data);
        });
        setTransition("blue-side-transition-"+ blueTeam.length/5*100)
    } else {
      setDisplayAlert("d-none");
    }
  }, [blueTeam, response]);

  return (
    <div>
      <Navbar />
      {response.length !== 0 && (
        <>
          <Alert
            title={"Feedback de Composi????o:"}
            displayAlert={displayAlert}
            addChampion={addChampion}
            floatPosition={"left"}
            response={response}
          />
          <Alert
            title={"Atributos atuais:"}
            displayAlert={displayAlert}
            addChampion={addChampion}
            floatPosition={"right"}
            response={response}
          />
        </>
      )}
        <Teams
          blueTeam={blueTeam}
          redTeam={redTeam}
          removeChampion={removeChampion}
          transition={transition}
        />
        <div className="container">
          <Search
            searchString={searchString}
            setSearchString={setSearchString}
          />
          <ChampionList
            searchChampion={searchChampion}
            addChampion={addChampion}
            champions={champions}
            key={champions.key}
            blueTeam={blueTeam}
          />
        </div>
    </div>
  );
}

export default App;
