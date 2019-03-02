//setting variables 
var wins = 0;
var losses = 0;
var targetNum = 0;
var totalNum = 0;

//applying the random number to each gem
var num1 = Math.floor(Math.random() * 12 + 1);
var num1 = Math.floor(Math.random() * 12 + 1);
var num2 = Math.floor(Math.random() * 12 + 1);
var num3 = Math.floor(Math.random() * 12 + 1);
var num4 = Math.floor(Math.random() * 12 + 1);


//random number for what user is trying to guess
var bigRan = Math.floor(Math.random() * 120 + 19);

//displaying the bigRan to html
$("#targetNum").text(bigRan);

//win loss display
$("#w-counter").text(wins);
$("#l-counter").text(losses);

//ressets game 
function reset() {
    bigRan = Math.floor(Math.random() * 120 + 19);
    $("#targetNum").text(bigRan)
    num1 = Math.floor(Math.random() * 12 + 1);
    num2 = Math.floor(Math.random() * 12 + 1);
    num3 = Math.floor(Math.random() * 12 + 1);
    num4 = Math.floor(Math.random() * 12 + 1);
    totalNum = 0;
    $("#totalNum").text(totalNum);
};

//counter function for wins
function winning() {
    alert("You won!");
    wins++;
    $('#w-counter').text(wins);
    reset();

};

function losing() {
    alert("you lost!")
    losses++;
    $('#l-counter').text(losses);
    reset();
};

//gem clicks
$('#purpGem').on('click', function () {
    totalNum = totalNum + num1;

    $('#totalNum').text(totalNum);
    //sets win/lose conditions
    if (totalNum === bigRan) {
        winning();
    } else if (totalNum > bigRan) {
        losing();
    }
});

$('#greenGem').on('click', function () {
    totalNum = totalNum + num2;
    console.log("New userTotal= " + totalNum);
    $('#totalNum').text(totalNum);
    //sets win/lose conditions
    if (totalNum === bigRan) {
        winning();
    } else if (totalNum > bigRan) {
        losing();
    }
});

$('#blueGem').on('click', function () {
    totalNum = totalNum + num3;
    console.log("New userTotal= " + totalNum);
    $('#totalNum').text(totalNum);
    //sets win/lose conditions
    if (totalNum === bigRan) {
        winning();
    } else if (totalNum > bigRan) {
        losing();
    }
});

$('#yellowGem').on('click', function () {
    totalNum = totalNum + num4;
    console.log("New userTotal " + totalNum);
    $('#totalNum').text(totalNum);

    //sets win/lose conditions
    if (totalNum === bigRan) {
        winning();
    } else if (totalNum > bigRan) {
        losing();
    }
});