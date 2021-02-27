const cards = document.querySelectorAll('.card');

appearOptions = {
    threshold: 1
};

const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
        }
    })
}, appearOptions);

cards.forEach(card => {
    appearOnScroll.observe(card);
})