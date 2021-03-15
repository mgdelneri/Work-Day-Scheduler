// Set variables
var today = moment();
var input9am = document.querySelector("#stuff9am");
var btn9am = document.querySelector("#btn9am");
var input10am = document.querySelector("#stuff10am");
var btn10am = document.querySelector("#btn10am");
var input11am = document.querySelector("#stuff11am");
var btn11am = document.querySelector("#btn11am");
var input12pm = document.querySelector("#stuff12pm");
var btn12pm = document.querySelector("#btn12pm");
var input1pm = document.querySelector("#stuff1pm");
var btn1pm = document.querySelector("#btn1pm");
var input2pm = document.querySelector("#stuff2pm");
var btn2pm = document.querySelector("#btn2pm");
var input3pm = document.querySelector("#stuff3pm");
var btn3pm = document.querySelector("#btn3pm");
var input4pm = document.querySelector("#stuff4pm");
var btn4pm = document.querySelector("#btn4pm");
var input5pm = document.querySelector("#stuff5pm");
var btn5pm = document.querySelector("#btn5pm");
var input6pm = document.querySelector("#stuff6pm");
var btn6pm = document.querySelector("#btn6pm");
var input7pm = document.querySelector("#stuff7pm");
var btn7pm = document.querySelector("#btn7pm");

// Displays today's date in the header
$("#currentDay").text(
  today.format("dddd") + ", " + today.format("MMMM Do, YYYY")
);

// Get input items from local storage for each time slot when page is opened/refreshed
renderLast9amInput();
renderLast10amInput();
renderLast11amInput();
renderLast12pmInput();
renderLast1pmInput();
renderLast2pmInput();
renderLast3pmInput();
renderLast4pmInput();
renderLast5pmInput();
renderLast6pmInput();
renderLast7pmInput();


function renderLast9amInput() {
    var last9am = localStorage.getItem("data9am");
    if (!input9am) {
        return;
    };
    input9am.value = last9am;
}

function renderLast10amInput() {
    var last10am = localStorage.getItem("data10am");
    if (!input10am) {
        return;
    };
    input10am.value = last10am;
}

function renderLast11amInput() {
    var last11am = localStorage.getItem("data11am");
    if (!input11am) {
        return;
    };
    input11am.value = last11am;
}

function renderLast12pmInput() {
    var last12pm = localStorage.getItem("data12pm");
    if (!input12pm) {
        return;
    };
    input12pm.value = last12pm;
}

function renderLast1pmInput() {
    var last1pm = localStorage.getItem("data1pm");
    if (!input1pm) {
        return;
    };
    input1pm.value = last1pm;
}

function renderLast2pmInput() {
    var last2pm = localStorage.getItem("data2pm");
    if (!input2pm) {
        return;
    };
    input2pm.value = last2pm;
}

function renderLast3pmInput() {
    var last3pm = localStorage.getItem("data3pm");
    if (!input3pm) {
        return;
    };
    input3pm.value = last3pm;
}

function renderLast4pmInput() {
    var last4pm = localStorage.getItem("data4pm");
    if (!input4pm) {
        return;
    };
    input4pm.value = last4pm;
}

function renderLast5pmInput() {
    var last5pm = localStorage.getItem("data5pm");
    if (!input5pm) {
        return;
    };
    input5pm.value = last5pm;
}

function renderLast6pmInput() {
    var last6pm = localStorage.getItem("data6pm");
    if (!input6pm) {
        return;
    };
    input6pm.value = last6pm;
}

function renderLast7pmInput() {
    var last7pm = localStorage.getItem("data7pm");
    if (!input7pm) {
        return;
    };
    input7pm.value = last7pm;
}


// Add event listeners to all buttons individually
btn9am.addEventListener("click", function(event) {
  event.preventDefault();
  localStorage.setItem("data9am", input9am.value);
});

btn10am.addEventListener("click", function(event) {
    event.preventDefault();
    localStorage.setItem("data10am", input10am.value);
});

btn11am.addEventListener("click", function(event) {
    event.preventDefault();
    localStorage.setItem("data11am", input11am.value);
});

btn12pm.addEventListener("click", function(event) {
    event.preventDefault();
    localStorage.setItem("data12pm", input12pm.value);
});

btn1pm.addEventListener("click", function(event) {
    event.preventDefault();
    localStorage.setItem("data1pm", input1pm.value);
});

btn2pm.addEventListener("click", function(event) {
    event.preventDefault();
    localStorage.setItem("data2pm", input2pm.value);
});

btn3pm.addEventListener("click", function(event) {
    event.preventDefault();
    localStorage.setItem("data3pm", input3pm.value);
});

btn4pm.addEventListener("click", function(event) {
    event.preventDefault();
    localStorage.setItem("data4pm", input4pm.value);
});

btn5pm.addEventListener("click", function(event) {
    event.preventDefault();
    localStorage.setItem("data5pm", input5pm.value);
});

btn6pm.addEventListener("click", function(event) {
    event.preventDefault();
    localStorage.setItem("data6pm", input6pm.value);
});

btn7pm.addEventListener("click", function(event) {
    event.preventDefault();
    localStorage.setItem("data7pm", input7pm.value);
});


// TODO: Make slots change color when past, preset, future
