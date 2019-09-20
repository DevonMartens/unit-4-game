$(document).ready(function() { 
    console.log("ready");
    let gameWins = 0;
    let gameLosses = 0;
    let score = 0;
    let veggie = 0;
    let lizard = 0;
    let colorBug = 0;
    let rockBug = 0;
    let computerNum = 0;
    // displaying score of zero used let so variables can be changed
    $("#score").html(score);
 //generated goal number constistent through game
    const generateRandomNum = function() {
        let random = Math.floor(Math.random() * 100 + 19);
        computerNum += random;
        return random;
    }

    // adding number to html
    $("#Number").html(generateRandomNum());

//adding values to crystals consistent through game
   var generateRockVal = function() {
        var random = Math.floor(Math.random() * 12 + 1);
        return random;
    }

    // adding consistent numbers to each rock
    const initializeRockValue = function() {
        veggie += generateRockVal();
        lizard += generateRockVal();
        colorBug += generateRockVal();
        rockBug += generateRockVal();
    }


    initializeRockValue();
    // assigning buttons to each id 
    $("button").on("click", function() {
        if(this.id === "veggie1") {
            score += veggie;
        } else if(this.id === "lizard1") {
            score += lizard;
        } else if(this.id === "colorBug1") {
            score += colorBug;
        } else if(this.id === "rockBug1") {
            score += rockBug;
        }
        // adding score to visual calling win or lose function
        $("#score").html(score);
        winOrLose();
    });
    
  //score  = number = win

    const winOrLose = function() {
        if(score === computerNum) {
            gameWins ++;
            $("#win").html(gameWins);
            alert("You win!");
            reset();   
//score gose over loose
        } else if(score > computerNum) {
            gameLosses ++;
            $("#loss").html(gameLosses);
            alert("You lose.");
            reset();
        }
    }
    
    // resets game
    const reset = function() {  
       score = 0;
        $("#score").html(score);
        veggie = 0;
        lizard = 0;
        colorBug = 0;
        rockBug = 0;
        computerNum = 0;
        initializeRockValue();
        $("#randomNum").html(computerNum += generateRandomNum());
    }
});

