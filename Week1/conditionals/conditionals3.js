var d = new Date();
var n = d.getHours();

if(n > 4 && n <= 11) {
  console.log("Good morning!");
} else if(n > 11 && n < 18) {
  console.log("Good afternoon!");
} else if(n >= 18 && n < 22) {
  console.log("Good evening!");
} else {
  console.log("Good night!");
}
  