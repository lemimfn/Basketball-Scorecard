let homeScore = 0;
let guestScore =0;
function addHome(points){
homeScore += points
document.getElementById("home-score").textContent=homeScore;
}
function addGuest(points){
  guestScore += points;
  document.getElementById("guest-score").textContent=guestScore;
}
function resetScore(){
  homeScore =0;
  guestScore =0;
  document.getElementById("home-score").textContent=0;
  document.getElementById("guest-score").textContent=0;
}