const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const resultCotainer = document.querySelector(".details-container");

const url = fetch("https://free-to-play-games-database.p.rapidapi.com/api/game?id=" + id, {
    "headers": {
       "x-rapidapi-key": "d252199cafmshb9ddfac0121f925p1d5962jsn8b7da9697655"
    }
});

async function getGamesInfo() {
    try {
    const response = await url;

    const data = await response.json();

    createHtml(data)
}
catch(error) {
    console.log(error);
    
    resultCotainer.innerHTML = `<p class="message"> An error occurred when calling the API</p>`
}
};

getGamesInfo()

function createHtml(data) {
    resultCotainer.innerHTML = `<h1 class="details-h1">${data.title}</h1>
                                <div class="image" style="background-image: url('${data.thumbnail}')"></div>
                                <div class="description">Description: ${data.short_description}</div>
                                <p>Publisher: ${data.publisher}</p><p>Game id: ${data.id}</p>`;
};