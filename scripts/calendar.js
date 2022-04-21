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

// Menu -------------------------------------------------------------

const filterbutton = document.querySelector(".filter-button");
const showcont = document.querySelector(".filter-container");
const showmnd = document.querySelector(".måned-select");
const showStud = document.querySelector(".student-select");
const showAns = document.querySelector(".ansatt-select");
const showStudies = document.querySelector(".studie-select");
const showRoller = document.querySelector(".rolle-select");
const showSkole = document.querySelector(".studiested-select");
const showTyp = document.querySelector(".type-select");
const showKvalitet = document.querySelector(".kvalitetsarbeid-select");


filterbutton.addEventListener("click",
function showcontainer() {
   if (showcont.style.display === "none") {
       showcont.style.display = "block";
   } else {
       showcont.style.display = "none";
   }
}
);

function showmaned() {
    if (showmnd.style.display === "none") {
        showmnd.style.display = "block";
        // console.log(showmaned);
    } else {
        showmnd.style.display = "none";
    }
};

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
    if (showAns.style.display === "none") {
        showAns.style.display = "block";
    } else {
        showAns.style.display = "none";
    }
}

function showStudent() {
    if (showStud.style.display === "none") {
        showStud.style.display = "block";
        showAns.style.display = "none"    
    } else {
        showStud.style.display = "none"
    }
}

function showStudie() {
    if (showStudies.style.display === "none") {
        showStudies.style.display = "block";
    } else {
        showStudies.style.display = "none";
    }
}

function showRolle() {
    if (showRoller.style.display === "none") {
        showRoller.style.display = "block";
    } else {
        showRoller.style.display = "none";
    }
}

function showStudiested() {
    if (showSkole.style.display === "none") {
        showSkole.style.display = "block";
    } else {
        showSkole.style.display = "none";
    }
}

function showType() {
    if (showTyp.style.display === "none") {
        showTyp.style.display = "block";
    } else {
        showTyp.style.display = "none";
    }
}

function showKvalArb() {
    if (showKvalitet.style.display === "none") {
        showKvalitet.style.display = "block";
    } else {
        showKvalitet.style.display = "none";
    }
}

// var filterbutton = document.querySelector(".filter-button");

// filterbutton.addEventListener("click",
// function showcontainer() {
//    var showcont = document.querySelector(".filter-container");
//    if (showcont.style.display === "none") {
//        showcont.style.display = "block";
//    } else {
//        showcont.style.display = "none";
//    }
// }
// );

// function showmaned() {
//     var showmnd = document.querySelector(".filter-måned");
//     if (showmnd.style.display === "none") {
//         showmnd.style.display = "block";
//         // console.log(showmaned);
//     } else {
//         showmnd.style.display = "none";
//     }
// };

// function showAnsatt() {
//     var showAns = document.querySelector(".ansatt-select");
//     if (showAns.style.display === "none") {
//         showAns.style.display = "block";
//     } else {
//         showAns.style.display = "none";
//     }
// }

// function showStudent() {
//     var showAns = document.querySelector(".ansatt-select")
//     var showStud = document.querySelector(".student-select");
//     if (showStud.style.display === "none") {
//         showStud.style.display = "block";
//         showAns.style.display = "none"    
//     } else {
//         showStud.style.display = "none"
//     }
// }