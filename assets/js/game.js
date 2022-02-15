// setting player variable information 
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

// setting enemy variable information 
var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

// player monay variable 
var playerMoney = 10;

// creating the "fight" function 
var fight = function() {
    // Alert players that they are starting the round 
    window.alert("Welcome to Robot Gladiators!");

    // Subtract the value of 'player attack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable. 
    enemyHealth = enemyHealth - playerAttack;

    // Log a resulting message to the console so we know that it worked. 
    console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

    // check enemy's health - if 0 or less, enemy died, else enemy has X health left
    if (enemyHealth <=0) {
        window.alert(enemyName + " has died!");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    // Subtract the value of 'enemyAttack" from the value of 'playerHeath' and use that result to update the value in the 'playerHealth' variable.
    playerHealth = playerHealth - enemyAttack;

    // Log a resulting message to the console so we know that it worked. 
    console.log (
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    // Check player's health - if 0 or less player died, else player has X health left 
    if (playerHealth <=0) {
        window.alert(playerName + " has died!");
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
};

// executing the "fight" function 
fight()
var promptFight = window.prompt("Do you want to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

// if player choose to fight then fight
if (promptFight === "fight" || promptFight === "FIGHT") {
    // remove enemy's health by subtracting the amount set in the playerAttack variable 
    enemyHealth = enemyHealth - playerAttack;
    console.log(
        playerName + " attacked " + enemyName + " . " + enemyName + " now has " + enemyHealth + " health remaining."
    );
    
    // check enemy's health 
    if (enemyHealth <=0) {
        window.alert(enemyName + " has died.");
    }
    else {
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
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
}
    // if player choses to skip 
else if (promptFight === "skip" || "SKIP") {
    // confirm player wants to skip 
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // if yes (true), leave fight 
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip the fight. Goodbye!");
        //subtract money from playerMoney for skipping 
        playerMoney = playerMoney - 2;
    }

    //if no (false), ask question again by running fight() again
else {
        fight();
    }
}



console.log(promptFight);