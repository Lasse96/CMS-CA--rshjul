const output = document.querySelector(".divcalendar");
const url = "https://lassestrand.no/wp-json/tribe/events/v1/events";
var allEvents = [];
var checkedMonths = [];
var checkedSted = [];

fetch(url)
 .then (respons => respons.json())
 .then (data => 
    {
        allEvents = data.events
        listEvents(data.events)
        console.log(allEvents);
    })
    
 .catch((error) => {
     console.error('Error:', error);
});


function listEvents (events) {
    let myList = "";
    for (let event of events) {
        var date = (new Date(event.start_date.replace(/-/g, "/")));
        console.log(event.venue.city);
        myList += `
        <div class="cal-flex">
            <div class="calendarbox">
                <h3>${event.start_date_details.day}</h3>
                <p>${date.toLocaleString('default', { month: 'short' })}</p>
            </div>
            <div class="cal-title">
                <h4>${event.title}</h4>
                <a href="./lesmer.html?id=${event.id}">Les Mer</a>
            </div>
        </div>`
    }
    // console.log(myList);
    output.innerHTML = myList;
   
}

function filterChange(e){
    var monthNumber = e.target.name;
    if (e.target.checked){
        checkedMonths.push(monthNumber);
    } else {
        for (let index = 0; index < checkedMonths.length; index++) {
            if (checkedMonths[index] == monthNumber){
                checkedMonths.splice(index, 1);
            }
        }
    }
    if (checkedMonths.length == 0){
        listEvents(allEvents);
    } else {

    let filteredEvents = allEvents.filter((event) => {
        if (checkedMonths.includes(event.start_date_details.month)){
            return true;
        }
        else {
            return false;
        }
        });

        listEvents(filteredEvents);
        
    }
}

function filterChanges(e){
    var studieSted = e.target.name;
    if (e.target.checked){
        checkedSted.push(studieSted);
    //    debugger;
    } else {
        for (let index = 0; index < checkedSted.length; index++) {
            if (checkedSted[index] == studieSted){
                checkedSted.splice(index, 1);
            }
        }
    }
    if (checkedSted.length == 0){
        listEvents(allEvents);
    } else {

    let filteredEventss = allEvents.filter((event) => {
        if (event.venue.city != null && checkedSted.includes(event.venue.city.toLowerCase())){
        console.log(event.venue.city);
        if (checkedSted.includes(event.venue.city.toLowerCase())){
            return true;
        }
        else{
            return false;
        }
        });

        listEvents(filteredEventss);
    }
}


document.querySelector("input#januar").addEventListener('change', filterChange);
document.querySelector("input#februar").addEventListener('change', filterChange);
document.querySelector("input#mars").addEventListener('change', filterChange);
document.querySelector("input#april").addEventListener('change', filterChange);
document.querySelector("input#mai").addEventListener('change', filterChange);
document.querySelector("input#juni").addEventListener('change', filterChange);
document.querySelector("input#juli").addEventListener('change', filterChange);
document.querySelector("input#august").addEventListener('change', filterChange);
document.querySelector("input#september").addEventListener('change', filterChange);
document.querySelector("input#oktober").addEventListener('change', filterChange);
document.querySelector("input#november").addEventListener('change', filterChange);
document.querySelector("input#desember").addEventListener('change', filterChange);
document.querySelector("input#bergen").addEventListener('change', filterChanges);

// Menu -------------------------------------------------------------

const showcont = document.querySelector(".filter-container");
const showmnd = document.querySelector(".måned-select");
const showStud = document.querySelector(".student-select");
const showAns = document.querySelector(".ansatt-select");
const showStudies = document.querySelector(".studie-select");
const showRoller = document.querySelector(".rolle-select");
const showSkole = document.querySelector(".studiested-select");
const showTyp = document.querySelector(".type-select");
const showKvalitet = document.querySelector(".kvalitetsarbeid-select");
const drag = document.querySelector(".drag");



// Filter -------------------------------------------------------------

function showNothing2() {
    showcont.style.display = "none";
    showAns.style.display ="none";
}

function showNothing() {
    showcont.style.display = "none";
    showAns.style.display ="none";
}

function showcontainer() {
       showcont.style.display = "block";
}

function showmaned() {
        showmnd.style.display = "block";
}

function backToMenu() {
    if (showmnd.style.display === "block") {
        showmnd.style.display = "none"
    } 
    if (showStudies.style.display === "block") {
        showStudies.style.display = "none"
    }
    if (showRoller.style.display === "block") {
        showRoller.style.display = "none"
    }
    if (showSkole.style.display === "block") {
        showSkole.style.display = "none"
    } 
    if (showKvalitet.style.display === "block") {
        showKvalitet.style.display = "none"
    } 
    if (showTyp.style.display === "block") {
        showTyp.style.display = "none"
    } else {
        showmnd.style.display = "none";
    }
}

function showAnsatt() {
        showAns.style.display = "block";
}

function showStudent() {
        showStud.style.display = "block";
        showAns.style.display = "none";    
}

function showStudie() {
        showStudies.style.display = "block";
}

function showRolle() {
        showRoller.style.display = "block";
}

function showStudiested() {
        showSkole.style.display = "block";
}

function showType() {
        showTyp.style.display = "block";
}

function showKvalArb() {
        showKvalitet.style.display = "block";
}