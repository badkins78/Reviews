//local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
    "Ad occaecat aute elit consequat voluptate quis cupidatat nostrud sint. Enim amet sit laboris quis Lorem pariatur commodo proident deserunt minim. Amet et tempor anim proident ut laborum. Aliquip cupidatat commodo proident aute. Voluptate in exercitation minim incididunt consequat. Velit cupidatat velit magna est."
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
    "Ad occaecat aute elit consequat voluptate quis cupidatat nostrud sint. Enim amet sit laboris quis Lorem pariatur commodo proident deserunt minim. Amet et tempor anim proident ut laborum. Aliquip cupidatat commodo proident aute. Voluptate in exercitation minim incididunt consequat. Velit cupidatat velit magna est."
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
    "Ad occaecat aute elit consequat voluptate quis cupidatat nostrud sint. Enim amet sit laboris quis Lorem pariatur commodo proident deserunt minim. Amet et tempor anim proident ut laborum. Aliquip cupidatat commodo proident aute. Voluptate in exercitation minim incididunt consequat. Velit cupidatat velit magna est."
  },
  {
    id: 3,
    name: "bill anderson",
    job: "the boss",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
    "Ad occaecat aute elit consequat voluptate quis cupidatat nostrud sint. Enim amet sit laboris quis Lorem pariatur commodo proident deserunt minim. Amet et tempor anim proident ut laborum. Aliquip cupidatat commodo proident aute. Voluptate in exercitation minim incididunt consequat. Velit cupidatat velit magna est."
  }
];

//select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// set starting item
let currentItem = 0;

//load initial item
window.addEventListener("DOMContentLoaded", function(){
  showPerson()
})

// show person based on item

function showPerson(){
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

// show next person

nextBtn.addEventListener('click', function(){
  currentItem++
  if(currentItem > reviews.length - 1){
    currentItem = 0;
  }
  showPerson()
  })
// show previous person

prevBtn.addEventListener('click', function(){
  currentItem--
  if(currentItem < 0){
    currentItem = reviews.length -1;
  }
  showPerson()
})

// show random person
function getRandomNumber(){
  return Math.floor(Math.random() * reviews.length)
}

randomBtn.addEventListener('click', function(){
  currentItem = getRandomNumber()
  showPerson()
})