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
        console.log(event);
        myList += `
        <div class="calendarbox">
            <h3>${event.start_date_details.day}</h3>
            <p>${date.toLocaleString('default', { month: 'short' })}</p>
        </div>
        <div>
            <p>${event.title}</p>
        </div>`
    }
    // console.log(myList);
    output.innerHTML = myList;
}
