const jokeElement = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener("click", generateJoke);

generateJoke();

// Alternative with async/await
async function generateJoke() {
  const config = {
    headers: {
      "accept": "application/json"
    },
  }

  const response = await fetch('https://icanhazdadjoke.com/', config)
  
  const data = await response.json();

  jokeElement.innerHTML = data.joke;
  randomizeBtnTxt();
}


//Using .then
// function generateJoke() {
//   fetch('https://icanhazdadjoke.com/', {
//     headers: {
//       "accept": "application/json"
//     }
//   })
//   .then(res => res.json())
//   .then(data => jokeElement.textContent = data.joke);

//   randomizeBtnTxt();
// }

function randomizeBtnTxt() {
  let randomTxtNum = Math.floor(Math.random() * 4);

  switch(randomTxtNum) {
    case 0:
      jokeBtn.textContent = "Make Ben Laugh";
      break;
    case 1:
      jokeBtn.textContent = "Make Dylan Laugh";
      break;
    case 2:
      jokeBtn.textContent = "Make Marg Laugh";
      break;
    case 3:
      jokeBtn.textContent = "Make Everyone Laugh";
      break;
  }
}