document.querySelector('button').addEventListener('click', getJoke)

function getJoke(){
  const url = `https://v2.jokeapi.dev/joke/Any`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector("h3").innerText = data.category
        document.querySelector("#setup").innerText = data.setup
        document.querySelector("#delivery").innerText = data.delivery
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

