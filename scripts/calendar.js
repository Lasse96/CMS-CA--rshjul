const output = document.querySelector(".divcalendar");
const url = "https://lassestrand.no/wp-json/tribe/events/v1/events";

fetch(url)
 .then (respons => respons.json())
 .then (events => listEvents(events.events))
 .catch((error) => {
     console.error('Error:', error);
});

function listEvents (events) {
    let myList = "";
    for (let event of events) {
        var date = (new Date(event.start_date.replace(/-/g, "/")));
        // console.log(event);
        myList += `
        <div class="cal-flex">
            <div class="calendarbox">
                <h3>${event.start_date_details.day}</h3>
                <p>${date.toLocaleString('default', { month: 'short' })}</p>
            </div>
            <div class="cal-title">
                <h4>${event.title}</h4>
                <p>${event.description}</p>
            </div>
        </div>`
    }
    // console.log(myList);
    output.innerHTML = myList;
}

// Filter -------------------------------------------------------------

var filterbutton = document.querySelector(".filter-button");

filterbutton.addEventListener("click",
function showcontainer() {
   var showcont = document.querySelector(".filter-container");
   if (showcont.style.display === "none") {
       showcont.style.display = "block";
   } else {
       showcont.style.display = "none";
   }
}
);

function showmaned() {
    var showmnd = document.querySelector(".filter-måned");
    if (showmnd.style.display === "none") {
        showmnd.style.display = "block";
        // console.log(showmaned);
    } else {
        showmnd.style.display = "none";
    }
};

function showAnsatt() {
    var showAns = document.querySelector(".ansatt-select");
    if (showAns.style.display === "none") {
        showAns.style.display = "block";
    } else {
        showAns.style.display = "block";
    }
}

function showStudent() {
    var showStud = document.querySelector(".student-select");
    if (showStud)
}