//Max Weight
let max

$(document).ready(function() {

  //Get Input for max weight
  $("#button").click(function() {
    max = document.getElementById("MaxWeight").value
    max = Number(max) * .9;

    //Check if number is negative 
    if (max < 0) {
      alert("Number can't be < 0");
    } else {

      //Round down to nearest 5
      max = Math.floor(max/5)*5;

      //Display
      $("#NewWeight").text("" + max);

      //Calculate for the other %s
      for(let i = 95; i >= 65; i-=5) {

        let string = "#" + i + "Weight";
        let newWeight = max * (i * .01);
        newWeight = Math.floor(newWeight/5)*5;
        $(string).text("" + newWeight);
      }
    }


  });


});
