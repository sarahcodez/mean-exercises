var printCand = "Oprah, Neil Diamond, or Scooby Doo";

document.getElementById("cand-list").innerHTML = printCand;

function getCand(){
  var name = document.getElementById("cand-name").value;
  
  var nameUpper = name.toUpperCase();

  if (nameUpper === "OPRAH" || "NEIL DIAMOND" || "SCOOBY DOO") {
  	var response = "You voted for " + nameUpper + "!";
    document.getElementById("output").innerHTML = response;
  } else {
  	document.getElementById("output").innerHTML = "Enter the name of one of the candidates above!";
  }  
  
}