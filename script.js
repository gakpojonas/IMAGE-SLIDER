const personalDetails = [
  {
    name: "Erik Cantona",
    nationality: "France",
    img: "./IMG/img-1.jpg",
    text: "A french born Manchester united legend. He was a true baller of the game and never tolerated any nonsense",
  },
  {
    name: "Omar Kanoute",
    nationality: "Mali",
    img: "./IMG/img-2.jpg",
    text: "A malian born striker who played for several clubs in Europe including sevilla",
  },
  {
    name: "Lionel Messi",
    nationality: "Argentina",
    img: "./IMG/img-3.jpg",
    text: "He's the God of football, a truly magnificent player who knows what football requires.",
  },
  {
    name: "Cristiano Ronaldo",
    nationality: "Portugal",
    img: "./IMG/img-4.jpg",
    text: "My main man, Cristiano, his mentality is just equal to none and although he might not be the God of football, he is my man.",
  },
  {
    name: "Virgil Van Dijk",
    nationality: "Netherlands",
    img: "./IMG/img-5.jpg",
    text: "A true definition of a modern day defender, he's the wall of liverpool currently and he has proven that over the years",
  },
  {
    name: "Zinedine Zidane",
    nationality: "France",
    img: "./IMG/img-6.jpg",
    text: "Zinedine, what a player he was, those who saw him play knows that he was at a level equal to none. a technically gifted player. It's sad how he ended his career",
  },
];
console.log(personalDetails);

const img = document.querySelector(".img");
const randomImg = document.querySelector(".random-img");
const slideLeft = document.querySelector(".btn-1");
const slideRight = document.querySelector(".btn-2");
const personName = document.querySelector(".personName");
const personNationality = document.querySelector(".personNationality");
const personsDetails = document.querySelector(".person-details");

let currentItem = 0;

window.addEventListener("click", function () {});

slideLeft.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = personalDetails.length - 1;
  }
  showPersonsInfo();
});

slideRight.addEventListener("click", function () {
  currentItem++;
  if (currentItem > personalDetails.length - 1) {
    currentItem = 0;
  }
  showPersonsInfo();
});

randomImg.addEventListener("click", function () {
  currentItem = Math.trunc(Math.random() * personalDetails.length);
  showPersonsInfo();
});

const showPersonsInfo = function () {
  const item = personalDetails[currentItem];
  img.src = item.img;
  personName.textContent = item.name;
  personNationality.textContent = item.nationality;
  personsDetails.textContent = item.text;
};
