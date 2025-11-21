const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Ecoute de l'appui sur les flèches du slider
const left=document.querySelector(".arrow_left")
const right=document.querySelector(".arrow_right")
const bannerImg=document.querySelector(".banner-img")
const bannerTagLine=document.querySelector("#banner p")

let imageActive = 0

left.addEventListener("click", () => {
	// console.log("j'ai cliqué à gauche")
	if (imageActive===0) 
		imageActive=slides.length - 1
	else
		imageActive --
	updateSlide()
	updateDots()
});

right.addEventListener("click", () => {
	// console.log("j'ai cliqué à droite")
	if (imageActive===slides.length -1)
		imageActive=0
	else
		imageActive ++
	updateSlide()
	updateDots()
});

// fonction de mise à jour des images et tagLine
function updateSlide() {
	bannerImg.src=`./assets/images/slideshow/${slides[imageActive].image}`
	bannerTagLine.innerHTML=slides[imageActive].tagLine
}

// Ajout des points du slider
const nbSlides = slides.length;
const dotsContainer = document.querySelector(".dots")

for (let i = 0; i < nbSlides; i++) {
	const dot = document.createElement("div")
	dot.classList.add("dot");
	dotsContainer.appendChild(dot)
}

// Sélection du premier point
const firstDot = dotsContainer.querySelector(".dot")
firstDot.classList.add("dot_selected")

const dots = dotsContainer.querySelectorAll(".dot")

// Fonction de mise à jour de la sélection des points
function updateDots() {
	dots.forEach((dot, index) => {
		if (index === imageActive) {
			dot.classList.add("dot_selected")
		} else {
			dot.classList.remove("dot_selected")
		}
	});
}
