/////////////////////////////////
//slider
////////////////////////////////
const slides = document.querySelectorAll(".about__slide")
const btnLeft = document.querySelector(".about__slider__btn--left")
const btnRight = document.querySelector(".about__slider__btn--right")
const dotContainer = document.querySelector(".dots")

//for current slide
let curSlide = 0
const maxSlide = slides.length

//for understanding what happen
// const slider = document.querySelector(".about__slider")
// slider.style.transform = "scale(0.4) translateX(-800px)"

//function for creat Dots
const createDots = function () {
    slides.forEach(function (_, i) {
        dotContainer.insertAdjacentHTML("beforeend", `<button class="dots__dot" data-slide="${i}"></button>`)
    })
}
createDots()

//dot active
const activeDot = function (slide) {
    document.querySelectorAll(".dots__dot").forEach(dot => dot.classList.remove("dots__dot--active"))

    document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add("dots__dot--active")
}
activeDot(0)

//because we put gotoslide in 0
// slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`))
//0%, 100%, 200%,

//function for changing slides
const goToSlide = function (slide) {
    //-100%, 0%, 100%,
    slides.forEach((s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`))
}

//when the web is loading go to slide with 0 index
goToSlide(0)

//Next Slide function
const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
        curSlide = 0
    } else {
        curSlide++;
    }

    goToSlide(curSlide)
    activeDot(curSlide)
}

//Previous Slide function
const prevSlide = function () {
    if (curSlide === 0) {
        curSlide = maxSlide - 1
    } else {
        curSlide--
    }
    goToSlide(curSlide)
    activeDot(curSlide)
}


btnRight.addEventListener("click", nextSlide)
btnLeft.addEventListener("click", prevSlide)

//for using arrow left and down in keyboard...you can see the event in console with console.log
document.addEventListener("keydown", function (e) {
    console.log(e)
    if (e.key === "ArrowLeft") prevSlide()
    e.key === "ArrowRight" && nextSlide()
})

//for works dots in slidershow
dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
        const {slide} = e.target.dataset
        goToSlide(slide)
        activeDot(slide)
    }
})


///////////////////////////////////////////////////////////////////
//slider for members

const cards = document.querySelectorAll(".members__card")
const btnCardLeft = document.querySelector(".members__slider__btn--left")
const btnCardRight = document.querySelector(".members__slider__btn--right")

//,-50%, -25%, 0%, 25%, 50%
// cards.forEach((c, i) => (c.style.transform = `translateX(${100 * i}%)`))

let curCard = 0
const maxCard = cards.length


/////////////////////////////
//for dots
const dotsMember = document.querySelector(".members__dots")
const showDots = function () {
    cards.forEach(function (_, i) {
        dotsMember.insertAdjacentHTML("beforeend", `<button class="dots__dot" data-card="${i}"></button>`)
    })
}
showDots()
//active dots
const activeDotMember = function (card) {
    document.querySelectorAll(".dots__dot").forEach(dot => dot.classList.remove("dots__dot--active"))

    document.querySelector(`.dots__dot[data-card="${card}"]`).classList.add("dots__dot--active")
}
activeDotMember(0)

//for clicks on dots
dotsMember.addEventListener("click", function (e){
    if (e.target.classList.contains("dots__dot")) {
        const {card} = e.target.dataset
        carousalCards(card)
        activeDotMember(card)
    }
} )

//CAeousalcards
const carousalCards = function (card) {
    cards.forEach((c, i) => (c.style.transform = `translateX(${100 * (i - card)}%)`))
}
carousalCards(0)

//for Next cards
const nextCard = function () {
    if (curCard === maxCard) {
        curCard = 0
    }else {
        curCard++
    }

    carousalCards(curCard)
    activeDotMember(curCard)
}

btnCardRight.addEventListener("click", nextCard)

//For previous cards
const preCard = function () {
    if (curCard === 0) {
        curCard = maxCard -1
    }else {
        curCard--
    }
    carousalCards(curCard)
    activeDotMember(curCard)
}

btnCardLeft.addEventListener("click", preCard)
