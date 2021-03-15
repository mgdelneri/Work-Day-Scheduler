// Set variables
var today = moment();
var btn9am = document.querySelector("#btn9am");
var input9am = document.querySelector("#stuff9am");

// Displays today's date in the header
$("#currentDay").text(
  today.format("dddd") + ", " + today.format("MMMM Do, YYYY")
);

// Get input items from local storage for each time slot when page is opened/refreshed
renderLast9amInput();

function renderLast9amInput() {
    var last9am = localStorage.getItem("data9am");
    
    if (!input9am) {
        return;
    };
    input9am.value = last9am;
}

// Add event listeners to all buttons individually
btn9am.addEventListener("click", function(event) {
  event.preventDefault();
  localStorage.setItem("data9am", input9am.value);
});

// TODO: Save input in local storage, so it stays on page when you refresh page
// TODO: Make slots change color when past, preset, future
