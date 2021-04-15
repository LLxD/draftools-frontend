import Navbar from './components/Navbar'
import Teams from './components/Teams'
import ChampionList from './components/ChampionList'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {DndContext} from '@dnd-kit/core';



function App() {

  const [blueTeam, setBlueTeam] = useState([]);
  const [redTeam, setRedTeam] = useState([]);
  const [champions, setChampions] = useState([]);

  const loadChampions = () => {
    axios.get('https://jsonplaceholder.typicode.com/photos').then((response) => {
      setChampions(response.data);
    });
  };

  useEffect(() => {
    loadChampions();
  }, []);


  const addChampion = (champion, team) => {
    console.log("TESTE")
    switch (team) {
      case 'blueTeam':
        if (blueTeam.length < 5) setBlueTeam([...blueTeam, champion]);
        break;
      case 'redTeam':
        if (redTeam.length < 5) setRedTeam([...redTeam, champion]);
        break;
      default:
        break;
    }
  };


  return (
    <div>
        <button onClick={addChampion("PANTHEON",blueTeam)}></button>
        <Navbar/>
        <DndContext onDragEnd={addChampion()}>
        <Teams blueTeam={blueTeam} redTeam={redTeam}/>
        <ChampionList champions={champions} addChampion={addChampion} name={champions.name} role="ADC:"/>
        </DndContext>
    </div>
  );
}

export default App;
