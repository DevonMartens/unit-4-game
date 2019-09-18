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
    // displaying initial score of 0
    $("#score").html(score);
 
    const generateRandomNum = function() {
        let random = Math.floor(Math.random() * 100 + 19);
        computerNum += random;
        return random;
    }

    // Generating random number to match
    $("#Number").html(generateRandomNum());


   var generateRockVal = function() {
        var random = Math.floor(Math.random() * 12 + 1);
        return random;
    }

    // generating random numbers for each crystal and assigning their values to declared variables above
    const initializeRockValue = function() {
        veggie += generateRockVal();
        lizard += generateRockVal();
        colorBug += generateRockVal();
        rockBug += generateRockVal();
    }


    initializeRockValue();
    // assigning value of button clicked to correct crystal. 
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
        // setting equal to the value of any button pressed.
        $("#score").html(score);
        winOrLose();
    });

    const winOrLose = function() {
        if(score === computerNum) {
            gameWins ++;
            $("#win").html(gameWins);
            alert("You win!");
            reset();   

        } else if(score > computerNum) {
            gameLosses ++;
            $("#loss").html(gameLosses);
            alert("You lose.");
            reset();
        }
    }
    
    // resets all
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

