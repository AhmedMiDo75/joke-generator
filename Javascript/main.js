const jokeAPI = "https://api.chucknorris.io/jokes/random";
const div = document.getElementById(`joke`);
const btn = document.getElementById(`joke-btn`);

function generateJokes() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", jokeAPI);
  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const jokesData = JSON.parse(this.responseText);
      div.innerHTML = jokesData.value;
    }
  };
  xhr.send();
}

btn.addEventListener(`click`, generateJokes);
document.addEventListener(`DOMContentLoaded`, generateJokes);
