//Constants
let ROUND_TO = 5;
let KEY_SUBMIT = 13;
let MAX_PERCENT = 95;
let LOW_PERCENT = 65;
let ROUND_BREAK = 2.5;

$(document).ready(function() {

  //Get Input for max weight
  $("#button").click(function() {
    let num = document.getElementById("MaxWeight").value
    num = Number(num);
    setNewWeights(num);
  });

  //Enter Key check
  $("#MaxWeight").keypress(function(e) {
    let key = e.which;
    if (key == KEY_SUBMIT) {
      let num = document.getElementById("MaxWeight").value
      num = Number(num);
      setNewWeights(num);
    }
  })

});

//Sets the DOM elements to there weights
function setNewWeights(max) {

  //Check if number is negative
  if (max < 0) {
    alert("Number can't be < 0");
  } else {

    //Round down to nearest 5
    max = Math.floor(max/ROUND_TO)*ROUND_TO;

    //Display
    $("#NewWeight").text("" + max);

    //Used in loop for mod math
    let temp;

    //Calculate for the other %s
    for(let i = MAX_PERCENT; i >= LOW_PERCENT; i-=5) {

      let string = "#" + i + "Weight";
      let newWeight = max * (i * .01);

      //Determine if you should round up or down, it is greater than 5 or less than 5
      temp = newWeight % ROUND_TO;

      if (temp >= ROUND_BREAK) {
        newWeight = Math.ceil(newWeight/ROUND_TO)*ROUND_TO;
      } else {
        newWeight = Math.floor(newWeight/ROUND_TO)*ROUND_TO;
      }

      $(string).text("" + newWeight);
    }
  }

}
