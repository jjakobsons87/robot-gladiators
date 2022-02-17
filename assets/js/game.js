//Gane States
// "WIN" - Player robot has defeated all enemy-robots
//      * Fight all enemy-robots
//      *Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less 

// setting player variable information 
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// setting enemy variable information 
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

// creating the "fight" function 
var fight = function(enemyName) {
    // repeat and execute as long as the enemy-robot is alive
    while(playerHealth > 0 && enemyHealth > 0) {
        // ask player if they'd like to fight or run 
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        // if player picks skip, confirm and then stop the loop
        if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm player wants to skip 
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            // if yes (true), leave fight and deduct money
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip the fight. Goodbye!");
                //subtract money from playerMoney for skipping 
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            }
        }
          
        // remove enemy's health by subtracting the amount set in the playerAttack variable 
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyName + " . " + enemyName + " now has " + enemyHealth + " health remaining."
        );
        
        // check enemy's health 
        if (enemyHealth <=0) {
            window.alert(enemyName + " has died.");
            
            // award player money for winning
            playerMoney = playerMoney + 20;

            //leave while() loop since enemy is dead
            break;
        } else {
            window.alert(enemyName + "still has " + enemyHealth + "health left.");
        }

        // remove player's health by subtracting the amount set in the enemyAttack variable 
        playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

        //check players health 
        if(playerHealth <= 0) {
            window.alert(playerName + " has died!");
            //leave while() loop if player is dead
            break;
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }    
};

// function to start a new game
var startGame = function() {
    // reset player stats 
    playerHealth = 100;
    playerAttack = 10; 
    playerMoney = 10;

    // fight each enemy-robot by looping over them and fighting them one at a time
    for(var i = 0; i < enemyNames.length; i++) {
        // if the player is still alive, keep fighting 
        if (playerHealth > 0) {
            //let player know what round they are in, remember - arrays start at 0 so thats why we add the 1 
            window.alert("Welcome to Robot Gladiators! Round " + ( i + 1) );
            
            // pick new enemy to fight based on the index of the enemyNames array
            var pickedEnemyName = enemyNames[i];

            // reset enemyHealth before starting a new fight 
            enemyHealth = 50;

            //use the debugger to pause script from running and check what's going on at that moment in the code 
            //debugger;

            // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter 
            fight(pickedEnemyName);

            // if we're not at the last enemy in the array 
            if (playerHealth > 0 && i < enemyNames.length - 1) {
                // ask if player wants to use the store before the next round 
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
                
                //if yes, take them to the store() function 
                if(storeConfirm) {
                shop();
                }
            }
        }
            // if player isn't alive, stop the game
            else {
                window.alert("You have lost your robot in battle! Game Over!");
                break;
            }
    }

    // after the loop ends, player is either out of health or enemies to fight, so fun the endGame function 
    endGame();
};

//function to end the entire game 
var endGame = function() {
    // if player is still alice, player wins! 
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a sctore of " + playerMoney + ".");
    }
    else {
        window.alert("You've lost your robot in battle.");
    }

    //ask player if they'd like to play again 
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        //restart the game
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
}

var shop = function() {
    // ask the player what they'd like to do
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL you health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );

    //use switch to carre out action 
    switch (shopOptionPrompt) {
        case "REFILL": // new case 
        case "refill":
            if (playerMoney >= 7){
            window.alert("Refilling player's health by 20 for 7 dollars.");

            //increase health and decrease money
            playerHealth = playerHealth + 20;
            playerMoney = playerMoney - 7;
            } else {
                window.alert("You don't have enough money!");;
            }
            break;
        case "UPGRADE": // new case 
        case "upgrade":
            if (playerMoney >= 7){
            window.alert("Upgrading player's attack by 6 for 7 dollars.");

            //increase attack and decrease money 
            playerAttack = playerAttack + 6;
            playerMoney =  playerMoney - 7;
            } else {
                window.alert("You don't have enough money!");
            }
            break;
        case "LEAVE":
        case "leave":
            window.alert("Leaving the store.");

            // do nothing, so function will end 
            break;
        default:
            window.alert("You did not pick a valid option. Try again.");

            // call shop() again to force player to pick a valid option 
            shop();
            break;
    }
};

// start the game when the page loads 
startGame();


// at the end of the game, win or lose, display a prompt to ask if the user wants to play again
// if yes start the fight loop again
// in no, end the script 

//once the player defeats or skips an enemy robot, prompt the user if they want to visit the shop
//if yes, ask the user if they want to refill, upgrade, or leave 
// if refill, up playerHealth by X 
// if Upgrade, increase playerAttack by X 
// if leave, move onto the next robot