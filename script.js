var clickCounter = 0;
total = 0;
teamScore1 = 0;
function hitOne() {
    var run = Math.floor(Math.random() * 7);
    // console.log(run);
    clickCounter = clickCounter + 1;
    for (var i = 1; i <= clickCounter; i++) {
        if (clickCounter == i) {
            document.getElementById(`player-b${i}`).innerHTML = run;
        }
    }
    total = total + run;
    if (clickCounter == 6) {
        document.getElementById("t1").innerHTML = total;
        teamScore1 = teamScore1 + total;
        total = 0;
    } else if (clickCounter == 12) {
        document.getElementById("t2").innerHTML = total;
        teamScore1 = teamScore1 + total;
        total = 0;
    } else if (clickCounter == 18) {
        document.getElementById("t3").innerHTML = total;
        teamScore1 = teamScore1 + total;
        total = 0;
    } else if (clickCounter == 24) {
        document.getElementById("t4").innerHTML = total;
        teamScore1 = teamScore1 + total;
        total = 0;
    } else if (clickCounter == 30) {
        document.getElementById("t5").innerHTML = total;
        teamScore1 = teamScore1 + total;
        total = 0;
    } else if (clickCounter == 36) {
        document.getElementById("t6").innerHTML = total;
        teamScore1 = teamScore1 + total;
        total = 0;
    } else if (clickCounter == 42) {
        document.getElementById("t7").innerHTML = total;
        teamScore1 = teamScore1 + total;
        total = 0;
    } else if (clickCounter == 48) {
        document.getElementById("t8").innerHTML = total;
        teamScore1 = teamScore1 + total;
        total = 0;
    } else if (clickCounter == 54) {
        document.getElementById("t9").innerHTML = total;
        teamScore1 = teamScore1 + total;
        total = 0;
    } else if (clickCounter == 60) {
        document.getElementById("t10").innerHTML = total;
        teamScore1 = teamScore1 + total;
        document.getElementById("score1").innerHTML = teamScore1;
        console.log(teamScore1);
        total = 0;
        document.getElementById("hit1").disabled = true;
    }
}
    

// Table 2

var clickCounter2 = 0;
total2 = 0;
teamScore2 = 0;
function hitTwo() {
    var run2 = Math.floor(Math.random() * 7);
    // console.log(run2);
    clickCounter2 = clickCounter2 + 1;
    for (var i = 1; i <= clickCounter2; i++) {
        if (clickCounter2 == i) {
            document.getElementById(`b${i}`).innerHTML = run2;
        }
    }
    total2 = total2 + run2;
    if (clickCounter2 == 6) {
        document.getElementById("p1").innerHTML = total2;
        teamScore2 = teamScore2 + total2;
        total2 = 0;
    } else if (clickCounter2 == 12) {
        document.getElementById("p2").innerHTML = total2;
        teamScore2 = teamScore2 + total2;
        total2 = 0;
    } else if (clickCounter2 == 18) {
        document.getElementById("p3").innerHTML = total2;
        teamScore2 = teamScore2 + total2;
        total2 = 0;
    } else if (clickCounter2 == 24) {
        document.getElementById("p4").innerHTML = total2;
        teamScore2 = teamScore2 + total2;
        total2 = 0;
    } else if (clickCounter2 == 30) {
        document.getElementById("p5").innerHTML = total2;
        teamScore2 = teamScore2 + total2;
        total2 = 0;
    } else if (clickCounter2 == 36) {
        document.getElementById("p6").innerHTML = total2;
        teamScore2 = teamScore2 + total2;
        total2 = 0;
    } else if (clickCounter2 == 42) {
        document.getElementById("p7").innerHTML = total2;
        teamScore2 = teamScore2 + total2;
        total2 = 0;
    } else if (clickCounter2 == 48) {
        document.getElementById("p8").innerHTML = total2;
        teamScore2 = teamScore2 + total2;
        total2 = 0;
    } else if (clickCounter2 == 54) {
        document.getElementById("p9").innerHTML = total2;
        teamScore2 = teamScore2 + total2;
        total2 = 0;
    } else if (clickCounter2 == 60) {
        document.getElementById("p10").innerHTML = total2;
        teamScore2 = teamScore2 + total2;
        document.getElementById("score2").innerHTML = teamScore2;
        console.log(teamScore2);
        total2 = 0;
        document.getElementById("hit2").disabled = true;
    }
}

function generateResult(){
    var score1 = document.getElementById("score1").innerHTML;
    var score2 = document.getElementById("score2").innerHTML;
    if(score1 > score2){
        document.getElementById("winner").innerHTML = "Team1 Won";
        // console.log("Team1 Won");
    }else if(score1 < score2){
        document.getElementById("winner").innerHTML = "Team2 Won";

        // console.log("Team2 won");
    }
}
