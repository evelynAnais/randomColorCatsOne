const BASE_URL = 'https://cat-fact.herokuapp.com/facts' 

let catFacts
async function getCatFact() {
  try {
    const response = await axios.get(BASE_URL)
    return response.data.map((fact) => {
      return fact.text
    });
  } catch(error) {
    console.log(error)
  }
}
getCatFact().then((data) => catFacts = data);


const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const color = document.querySelector('.catfact');

btn.addEventListener('click', function() {
  getCatFact()

  let hexColor = '#'; 
  for(let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()]
  }
  color.textContent = catFacts[randomCat()]
  document.body.style.backgroundColor = hexColor;
});

function randomCat () {
  return Math.floor(Math.random() * catFacts.length)
}

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length)
}
