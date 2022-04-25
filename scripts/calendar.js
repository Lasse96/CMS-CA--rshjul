const output = document.querySelector(".divcalendar");
const url = "https://lassestrand.no/wp-json/tribe/events/v1/events";
var allEvents = [];
var eventsFiltered = [];
var checkedMonths = [];
var checkedSted = [];
var checkedCategory = [];
var checkedStudie = [];
var checkedRoller = [];
var checkedKval = [];

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
        // console.log(event.venue.city);
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

function filterMonths(e){
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
    runFilter();
}

function filterCity(e){
    var studieSted = e.target.name;
    if (e.target.checked){
        checkedSted.push(studieSted);
    } else {
        for (let index = 0; index < checkedSted.length; index++) {
            if (checkedSted[index] == studieSted){
                checkedSted.splice(index, 1);
            }
        }
    }
    runFilter();
}

function filterType(e){
    var type = e.target.name;
    if (e.target.checked){
        checkedCategory.push(type.toLowerCase());
    } else {
        for (let index = 0; index < checkedCategory.length; index++) {
            if (checkedCategory[index] == type){
                checkedCategory.splice(index, 1);
            }
        }
    }
    runFilter();
}

function filterStudie(e){
    var studie = e.target.name;
    if (e.target.checked){
        checkedCategory.push(studie.toLowerCase());
    } else {
        for (let index = 0; index < checkedCategory.length; index++) {
            if (checkedCategory[index] == studie){
                checkedCategory.splice(index, 1);
            }
        }
    }
    runFilter();
}

function filterRoller(e){
    var roller = e.target.name;
    if (e.target.checked){
        checkedCategory.push(roller.toLowerCase());
    } else {
        for (let index = 0; index < checkedCategory.length; index++) {
            if (checkedCategory[index] == roller){
                checkedCategory.splice(index, 1);
            }
        }
    }
    runFilter();
}

function filterKvalitet(e){
    var kvalitet = e.target.name;
    if (e.target.checked){
        checkedCategory.push(kvalitet.toLowerCase());
    } else {
        for (let index = 0; index < checkedCategory.length; index++) {
            if (checkedCategory[index] == kvalitet){
                checkedCategory.splice(index, 1);
            }
        }
    }
    runFilter();
}

function runFilter(){
    eventsFiltered = allEvents;

    // Filter by months
    if (checkedMonths.length > 0){
        eventsFiltered = eventsFiltered.filter((event) => {
            if (checkedMonths.includes(event.start_date_details.month)){
                return true;
            }
            else {
                return false;
            }
        });        
    } 

    // Filter by city
    if (checkedSted.length > 0){
        eventsFiltered = eventsFiltered.filter((event) => {
            if (event.venue.city != null && checkedSted.includes(event.venue.city.toLowerCase())){
                return true;
            }
            else{
                return false;
            }
        });
    }

    // Filter by type, studie, roller og kvalitet
    if (checkedCategory.length > 0){
        eventsFiltered = eventsFiltered.filter((event) => {
            if (event.categories.some(category => category.name != null && checkedCategory.includes(category.name.toLowerCase()))) {
                return true;
              }
            else{
                return false;
            }
        });
    }
    listEvents(eventsFiltered);
}


document.querySelector("input#januar").addEventListener('change', filterMonths);
document.querySelector("input#februar").addEventListener('change', filterMonths);
document.querySelector("input#mars").addEventListener('change', filterMonths);
document.querySelector("input#april").addEventListener('change', filterMonths);
document.querySelector("input#mai").addEventListener('change', filterMonths);
document.querySelector("input#juni").addEventListener('change', filterMonths);
document.querySelector("input#juli").addEventListener('change', filterMonths);
document.querySelector("input#august").addEventListener('change', filterMonths);
document.querySelector("input#september").addEventListener('change', filterMonths);
document.querySelector("input#oktober").addEventListener('change', filterMonths);
document.querySelector("input#november").addEventListener('change', filterMonths);
document.querySelector("input#desember").addEventListener('change', filterMonths);

document.querySelector("input#bergen").addEventListener('change', filterCity);
document.querySelector("input#oslo").addEventListener('change', filterCity);
document.querySelector("input#stavanger").addEventListener('change', filterCity);
document.querySelector("input#kristiansand").addEventListener('change', filterCity);
document.querySelector("input#nettstudier").addEventListener('change', filterCity);

document.querySelector("input#arrangementer").addEventListener('change', filterType);
document.querySelector("input#frister").addEventListener('change', filterType);

document.querySelector("input#frontend").addEventListener('change', filterStudie);
document.querySelector("input#backend").addEventListener('change', filterStudie);
document.querySelector("input#dataAnalyst").addEventListener('change', filterStudie);
document.querySelector("input#UX-Design").addEventListener('change', filterStudie);
document.querySelector("input#UI-Design").addEventListener('change', filterStudie);
document.querySelector("input#grafiskDesign").addEventListener('change', filterStudie);
document.querySelector("input#filmproduksjon").addEventListener('change', filterStudie);
document.querySelector("input#digitalPrototyping").addEventListener('change', filterStudie);
document.querySelector("input#tekniskDesign").addEventListener('change', filterStudie);
document.querySelector("input#digitalMarkedsføring").addEventListener('change', filterStudie);
document.querySelector("input#spillTek").addEventListener('change', filterStudie);

document.querySelector("input#rektor").addEventListener('change', filterRoller);
document.querySelector("input#stedPro").addEventListener('change', filterRoller);
document.querySelector("input#nettPro").addEventListener('change', filterRoller);
document.querySelector("input#ledPro").addEventListener('change', filterRoller);
document.querySelector("input#ledPed").addEventListener('change', filterRoller);
document.querySelector("input#linjeleder").addEventListener('change', filterRoller);
document.querySelector("input#fagAns").addEventListener('change', filterRoller);
document.querySelector("input#emneansvarlig").addEventListener('change', filterRoller);
document.querySelector("input#faglærer").addEventListener('change', filterRoller);

document.querySelector("input#styrebeslutninger").addEventListener('change', filterKvalitet);
document.querySelector("input#datainnhenting").addEventListener('change', filterKvalitet);
document.querySelector("input#kvalRap").addEventListener('change', filterKvalitet);
document.querySelector("input#rekUt").addEventListener('change', filterKvalitet);

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