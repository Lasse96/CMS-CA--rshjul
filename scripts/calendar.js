const output = document.getElementById("test");
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
        <p>${event.title}</p>`
    }
    console.log(myList);
    output.innerHTML = myList;
}
