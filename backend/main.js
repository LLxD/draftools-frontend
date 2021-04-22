const { request, response } = require('express');
const express = require('express')
const app = express();

const { Kayn, REGIONS } = require('kayn')

const kayn = Kayn('RGAPI-4c985925-373c-456b-9e80-c6d71c812723')({
    region: REGIONS.BRAZIL,
    apiURLPrefix: 'https://br1.api.riotgames.com/',
    locale: 'pt_BR',
})

app.get('/champions', (req, res) => {
    kayn.DDragon.Champion.list().then((result) => res.send(result));
});

app.listen(5550);

