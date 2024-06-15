const carousel = document.querySelector('.carousel');
let sliders = [];
let slideIndex = 0;

const movies = [
    {
        name: "Luca",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        image: "images/slider 1.PNG"
    },
    {
        name: "Raya and the Last Dragon",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        image: "images/slider 2.PNG"
    },
    {
        name: "Soul",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        image: "images/slider 3.PNG"
    },
    {
        name: "Cruella",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        image: "images/slider 4.PNG"
    },
    {
        name: "Black Widow",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        image: "images/slider 5.PNG"
    }
];

const createSlide = () => {
    if (slideIndex >= movies.length) {
        slideIndex = 0;
    }

    // Creating DOM element
    let slide = document.createElement('div');
    let imgElement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');

    // Attaching all elements
    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(imgElement);
    slide.appendChild(content);
    carousel.appendChild(slide);

    // Setting up images
    imgElement.src = movies[slideIndex].image;
    slideIndex++;

    // Setting elements class names
    slide.className = 'slider';
    content.className = 'slide-content';
    h1.className = 'movie-title';
    p.className = 'movie-des';

    sliders.push(slide);

    // Adding sliding effect
    if (sliders.length) {
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 1)}% - ${30 * (sliders.length - 1)}px)`;
    }
};

for (let i = 0; i < 3; i++) {
    createSlide();
}

setInterval(() => {
    createSlide();
}, 3000);
 