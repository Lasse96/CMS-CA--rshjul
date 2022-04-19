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
        console.log(event.title);
        myList += `
        <h3>${event.start_date_details.day}</h3>
        <p>${event.start_date_details.month}</p>
        <p>${event.title}</p>`
    }
    console.log(myList);
    output.innerHTML = myList;
}
