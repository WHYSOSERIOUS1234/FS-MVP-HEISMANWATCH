const express = require('express')
const app = express()
const {Client} = require('pg')
const cors = require('cors')
const connectionString = 'postgresql://postgres:cat@127.0.0.1:5432/heisman_stats'
const client = new Client({
    connectionString:connectionString
});
const PORT = 3000
app.use(cors())
app.use(express.json())
client.connect()

app.get('/watchlist', (req,res) => {
  client.query('SELECT * FROM watchList;')
  .then(results => res.status(200).send(results.rows))  
})

app.get('/watchlist/:id', (req, res) => {
    const id = req.params.id
    client.query('SELECT * FROM watchList WHERE player_id=$1', [id])
    .then(results => res.status(200).send(results.rows))
})

app.post('/watchlist', (req, res) => {
    const {player_name,team_name,player_position,touchdowns,interceptions,passing_yards,rushing_yards,TFL} = req.body
    client.query(`INSERT INTO watchList (player_name, team_name, player_position, touchdowns, interceptions, passing_yards, rushing_yards, TFL) VALUES ('${player_name}', '${team_name}', '${player_position}', '${touchdowns}', '${interceptions}', '${passing_yards}', '${rushing_yards}', '${TFL}')`)
    res.status(200).send('We will check to see if your player deserves a shot!')
})

app.delete(`/watchlist/:id`, (req,res) => {
const player_name = req.params.id
client.query(`DELETE FROM watchList WHERE player_id='${player_name}'`)
res.send('Deleted your garbage player')
})

app.patch('/watchlist', ()=> {
    const update = req.body
    console.log(update)
    // client.query(`UPDATE sports_tb SET ='${city}' WHERE sport_id=${req.params.id}`)
})

app.listen(PORT, () => {
    console.log('it works on 3000')
})
