DROP TABLE IF EXISTS watchList;

CREATE TABLE watchList (
    player_id SERIAL,
    player_name VARCHAR(150),
    team_name VARCHAR(40),
    player_position VARCHAR(50),
    touchdowns INTEGER,
    interceptions INTEGER,
    passing_yards INTEGER,
    rushing_yards INTEGER,
    TFL INTEGER
);

INSERT INTO watchList (player_name,team_name,player_position,touchdowns,interceptions,passing_yards,rushing_yards,TFL) VALUES 
('CJ Stroud','Ohio State','Quarterback',18,2,1737,0,0),
('Hendon Hooker','Tennessee','Quarterback',11,0,1432,238,0),
('Caleb Williams','USC','Quarterback',14,1,1590,144,0),
('Bryce Young','Alabama','Quarterback',14,3,1202,178,0),
('Blake Corum','Michigan','Running back',11,0,0,735,0);


