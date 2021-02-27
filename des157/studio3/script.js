(function (){
    'use strict';
    console.log("reading js");
    const startGame = document.getElementById('startgame');
    const gameControl = document.getElementById('gamecontrol');
    const game = document.getElementById('game');
    const score = document.getElementById('score');
    const actionArea = document.getElementById('actions');

    const startSound = new Audio('media/start.wav');
    const winGame = new Audio('media/win.wav');
    const scored = new Audio('media/score.wav')
    const turnswitch = new Audio('media/one.wav');
    const zero = new Audio('media/zero.wav');

    let gameData = {
        dice: ['images/die-1.svg', 'images/die-2.svg', 'images/die-3.svg', 
            'images/die-4.svg', 'images/die-5.svg', 'images/die-6.svg'],
        players: ['player 1', 'player 2'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29
    };

    startGame.addEventListener("click", function(){
        //randomly set game index
        document.getElementById('game').style.display = 'block';
        startSound.play();
        gameData.index = Math.round(Math.random());
        // gameControl.innerHTML = '<h2>The Game Has Started</h2>';
        gameControl.innerHTML = '<button id="quit">Wanna Quit?</button>';
        document.getElementById('quit').addEventListener("click", function(){
            location.reload();
        });
        console.log(gameData.index);
        // game.innerHTML = `<p>Roll the dice for ${gameData.players[gameData.index]}</p>`;
        setUpTurn();
    });

    function setUpTurn(){
        game.innerHTML = `<p>Roll the dice for ${gameData.players[gameData.index]}</p>`;
        showCurrentScore();
        // document.getElementById(`${gameData.players[gameData.index]}`).style.color=cornflowerblue;
        actionArea.innerHTML = '<button id="roll">Roll the Dice</button>';
        
        document.getElementById('roll').addEventListener('click',function(){
            throwDice();
        });
    }

    function throwDice(){
        actionArea.innerHTML = '';
        gameData.roll1 = Math.floor(Math.random()*6)+1; //using ceil would result in a zero, random() is inclusive of 0 but not 1.
        gameData.roll2 = Math.floor(Math.random()*6)+1;
        game.innerHTML = `<p>Roll the dice for ${gameData.players[gameData.index]}</p>`;
        game.innerHTML += `<img src="${gameData.dice[gameData.roll1 - 1]}" width="250" height="250">
                            <img src="${gameData.dice[gameData.roll2 - 1]}" width="250" height="250">`;
        gameData.rollSum = gameData.roll1 + gameData.roll2;
        //if two 1's are rolled
        if(gameData.rollSum === 2){
            zero.play();
            game.innerHTML += '<p>Oh snap! Snake eyes!</p>';
            gameData.score[gameData.index] = 0;
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                        //if true (1)                if false (0)
            //show current score
            setTimeout(setUpTurn, 2000);
        } //if either die is a 1 
        else if (gameData.roll1 === 1 || gameData.roll2 === 1){
            turnswitch.play();
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            game.innerHTML += `<p>Sorry, one of your rolls was a one, switching to ${gameData.players[gameData.index]}</p>`;
            setTimeout(setUpTurn, 2000);
        } //if neither die is a 1
        else {
            scored.play();
            gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
            actionArea.innerHTML = '<button id="rollagain">Roll again</button><button id="pass">Pass</button>';

            document.getElementById('rollagain').addEventListener('click', function(){
                throwDice();
            });
            document.getElementById('pass').addEventListener('click', function(){
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                throwDice();
            });
            checkWinningCondition();
        }
    }

    function checkWinningCondition(){
        if(gameData.score[gameData.index] > gameData.gameEnd) {
            winGame.play();
            score.innerHTML = `<h2>${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points!</h2>`;
            
            actionArea.innerHTML = '';
            document.getElementById('quit').innerHTML = "Start a New Game?";
        } 
        else {
            showCurrentScore();
        }
    }

    function showCurrentScore(){
        score.innerHTML = `<p class="player"><strong>${gameData.players[0]}</p><p>${gameData.score[0]}</strong></p><p class="player"><strong>${gameData.players[1]}</p><p>${gameData.score[1]}</strong></p>`;
    
    }
}) ();