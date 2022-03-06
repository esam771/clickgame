let correct = 0
let incorrect = -1
let current = -1

function pic(num) {
    if (num == current) {
        correct+=1
    } else {
        incorrect+=1
    }
    console.log('selected: ' + num)
    current = getRandomInt()
    document.getElementById("current").innerHTML = ("current: " + current)
    document.getElementById("stats").innerHTML = ("correct: " + correct + " - - incorrect: " + incorrect 
        + " - - " + Math.round((correct/(incorrect + correct))*100) + "%")
    console.log("new random: " + current)
}

function getRandomInt() {
    return Math.floor(Math.random() * 9) + 1;
    //random int from 1-4
  }
