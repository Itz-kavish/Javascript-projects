// local reviews data
const reviews = [
  {
    id: 1,
    name: "Virat Chokli",
    job: "Professional cricketer",
    img: "viratKohli",
    text: "Virat Chokli is a professional cricketer. His name used to be Virat kohli but due to his multiple instances of choking during important matches and winning all the not very important matches, he is also reffered as virat CHOKLI. His team never wins trophies but are great at winning a people's hearts. There trophy cabinet was renamed to the HEART cabinet because of the excessive amount of hearts they won.",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "There were 2 dogs outside and there were 3 cats. The dogs were actually dogs and the cats were dogs. The company I work at is pretty hotdog. The people that worked there were experts at everything. They knew how to read, write and listen. THEY LISTENED WITH THEIR EARS AND SPOKE WITH THEIR MOUTH. It is pretty amazing for me to speak eith your mouth and listen with your ears becasue there are trillions of stars in the sky and the earth is not flat but I think its donut shaped. ",
  },
];

//Selecting all the IDs and classes

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

//Function for generating random number that equal the length of the array 'reviews'
function generateRandomNum() {
  return Math.floor(Math.random() * reviews.length);
}

//Value for starting item
let currentItem = 1;

//Function for the Previous button that makes the reviews cycle backwards
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

//Function for the Next Button that makes the reviews cycle forward
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > 3) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

randomBtn.addEventListener("click", function () {
  currentItem = generateRandomNum();
  showPerson(currentItem);
});

//load the first item
window.addEventListener("DOMContentLoaded", function () {
  showPerson(currentItem);
});

//Show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.innerHTML = item.name;
  job.innerHTML = item.job;
  info.innerHTML = item.text;
}
