

let url = 'http://localhost:3000/watchlist'
fetch(url).then(results=> results.json()).then((data) => { 
   
    for(let i = 0; i < data.length; i++) {
        player = data[i]
        let newDiv = document.createElement('div')
        let playerP = document.createElement('p')
        let touchP = document.createElement('p')
        let rushP = document.createElement('p')
        let int = document.createElement('p')
        let tfl = document.createElement('p')
        playerP.textContent = `${player.player_name} ${player.team_name} ${player.player_position}`
        playerP.classList.add('playerName')
        touchP.classList.add('touchdown')
        touchP.textContent = `Touchdowns: ${player.touchdowns}`
        rushP.textContent = `Rushing Yards ${player.rushing_yards}`
        int.textContent = `Interceptions: ${player.interceptions}`
        tfl.textContent = `Tackle For Loss: ${player.tfl}`
        newDiv.append(playerP,touchP,rushP,int,tfl)
        document.body.append(newDiv)
    }
} )