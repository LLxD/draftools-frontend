import Navbar from './components/Navbar'
import Teams from './components/Teams'
import ChampionList from './components/ChampionList'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'



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
        switch (team) {
            case 'blue':
                setBlueTeam(blueTeam => blueTeam.length < 5 ? ([...blueTeam, champion]) : (blueTeam));
                break;
            case 'red':
                setRedTeam(redTeam => redTeam.length < 5 ? ([...redTeam, champion]) : (redTeam));
                break;
            default:
                break;
        }
    };


    const removeChampion = (index, team) => {
        switch (team) {
            case 'blue':
                setBlueTeam(blueTeam => blueTeam.filter((champ, i) => i !== index));
                break;
            case 'red':
                setRedTeam(redTeam => redTeam.filter((champ, i) => i !== index));
                break;
            default:
                break;
        }
    };



    return (
        <div>
            <Navbar />
            <DndProvider backend={HTML5Backend}>
                <Teams blueTeam={blueTeam} redTeam={redTeam} removeChampion={removeChampion} />
                <ChampionList addChampion={addChampion} champions={champions} name={champions.name} />
            </DndProvider>
        </div>
    );
}

export default App;