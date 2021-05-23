const container = document.querySelector(".container");
const seat = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");

let ticketPrice= parseInt(movieSelect.value);

function updateSelectedCount(){
  const selectedSeats = document.querySelectorAll(".row .selected");
  const selectedSeatsCount = selectedSeats.length;
  count.innerHTML = selectedSeatsCount;
  total.innerHTML = selectedSeatsCount * ticketPrice;
}
movieSelect.addEventListener("change", function (e){
  ticketPrice=parseInt(e.target.value);
  updateSelectedCount();
});
container.addEventListener("click", function(e){
  if(
    e.target.classList.contains("seat")&&
    !e.target.classList.contains("occupied")
  ){
    e.target.classList.toggle("selected");
    updateSelectedCount();
  }
});