const resultCotainer = document.querySelector(".details-container");
const idContainer = document.querySelector(".id");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id" -1);

console.log(id);

idContainer.innerHTML = id;

// console.log(id)

const url = "https://www.freetogame.com/api/games?category=shooter";
const proxy = "https://noroffcors.herokuapp.com/";

const corsFiks = proxy + url;

async function getGamesInfo() {
    try {
        const response = await fetch(corsFiks);

        const data = await response.json();

        console.log(data);

        createHtml(data);
        
    } catch(error) {
        console.log(error);
        
        resultCotainer.innerHTML = `<p class="message"> An error occurred when calling the API</p>`
    }
};

getGamesInfo()

function createHtml(data) {
    resultCotainer.innerHTML = `<h1 class="details-h1">${data[id].title}</h1>
                                <div class="details-image2" 
                                style="background-image: url('${data[id].thumbnail}')"></div>
                                <div class="details-description">Description: ${data[id].short_description}</div>
                                <p>Publisher: ${data[id].publisher}</p>`;
}