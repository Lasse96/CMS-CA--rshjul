const output = document.querySelector(".test");
const url = "https://lassestrand.no/wp-json/tribe/events/v1/events";

fetch(url)
 .then (respons => respons.json())
 .then (events => listEvents(events))
 .catch((error) => {
     console.error('Error:', error);
});

function listEvents (events) {
    console.log(events.events);
}

// function listEvents (events) {
//     let myList = "";
//     for (let event of events) {
//         console.log(event);
//         myList += `
//             <a href="product.html?id=${event.id}">
//                 ${event.name}
//             </a>`;
//         console.log(event.name);
//     }
//     console.log(myList);
//     output.innerHTML = myList;
// }

