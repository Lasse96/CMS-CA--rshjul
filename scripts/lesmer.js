const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const id = params.get("id");
console.log(id);

const output = document.querySelector(".detailsOutput");

const url = "https://lassestrand.no/wp-json/tribe/events/v1/events/" + id;

fetch (url)
 .then(response => response.json())
 .then(event => {
     console.log(event);
     listDetails(event);
 })
 .catch(error => {
     console.error("Error: " + error);
 })

function listDetails(event) {
    document.title = event.title;
    var date = (new Date(event.start_date.replace(/-/g, "/")));

    output.innerHTML += `
    <h1>${event.title}</h1>
    <p class="date">${event.start_date_details.day} ${date.toLocaleString('default', { month: 'short' })}</p>
    <div class="desc">${event.description}</div>
    <p>${event.venue.address}, ${event.venue.zip} ${event.venue.city}</p>`
}