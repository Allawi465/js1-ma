const resultCotainer = document.querySelector(".container");

const url = "https://www.freetogame.com/api/games?category=shooter";
const proxy = "https://noroffcors.herokuapp.com/";

const corsFiks = proxy + url;

async function getGames() {
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

getGames()

function createHtml(data) {

    resultCotainer.innerHTML = "";

    for (let i = 0; i < data.length; i++) {

        if (i === 10) {
            break;
        }

        resultCotainer.innerHTML += `<div class="product">
                                        <h3>${data[i].title}</h3>
                                        <p>Platform: ${data[i].platform}</p>
                                        <time class="details-date">Released: ${data[i].release_date}</time>
                                        <a href="details.html?id=${data[i].id}" class="result">Read more</a>
                                    </div>`; 
    }
};