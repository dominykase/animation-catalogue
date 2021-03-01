const cards = document.querySelectorAll('.card');
const paragraphs = document.querySelectorAll('.para');
const images = document.querySelectorAll('.slide-in');

cardOptions = {
    threshold: 0,
    rootMargin: "0px 0px -100px 0px"
};

slideOptions = {
    threshold: 0,
    rootMargin: "0px 0px -300px 0px"
};

const cardOnScroll = new IntersectionObserver(function (entries, cardOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("appear");
            cardOnScroll.unobserve(entry.target);
        }
    })
}, cardOptions);

const slideOnScroll = new IntersectionObserver(function (entries, slideOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("appear");
            slideOnScroll.unobserve(entry.target);
        }
    })
}, slideOptions);

cards.forEach(card => {
    cardOnScroll.observe(card);
})

paragraphs.forEach(para => {
    slideOnScroll.observe(para);
})

images.forEach(image => {
    slideOnScroll.observe(image);
})