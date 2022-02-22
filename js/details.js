const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id") -1;

const resultCotainer = document.querySelector(".details-container");

const url = fetch("https://free-to-play-games-database.p.rapidapi.com/api/games", {
    "headers": {
       "x-rapidapi-key": "d252199cafmshb9ddfac0121f925p1d5962jsn8b7da9697655"
    }
});
const proxy = "https://noroffcors.herokuapp.com/";

const corsFiks = proxy + url;

async function getGamesInfo() {
    try {
    const response = await url;

    const data = await response.json();

    console.log(data)

    createHtml(data)

}
catch(error) {
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
};