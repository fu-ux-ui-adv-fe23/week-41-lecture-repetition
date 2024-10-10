const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            // entry.target.classList.add('show');
            slideIn(entry.target);
        } else {
            slideOut(entry.target);
        }
    })
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

function slideIn(element) {
    anime({
        targets: element,
        keyframes: [
            {
                translateX: '-100%',
                opacity: 0,
                filter: 'blur(5px)'
            },
            {
                translateX: 0,
                opacity: 1,
                filter: 'blur(0)'
            },
        ],
        duration: 1000,
        easing: 'easeInOutQuad'
    });

    anime({
        targets: '.img',
        translateX: ['-100%', 0],
        duration: 1000,
        easing: 'easeInOutQuad',
        delay: anime.stagger(300)
    });
}

function slideOut(element) {
    anime({
        targets: element,
        keyframes: [
            {
                translateX: 0,
                opacity: 1,
                filter: 'blur(0)'
            },
            {
                translateX: '-100%',
                opacity: 0,
                filter: 'blur(5px)'
            }
        ],
        duration: 1000,
        easing: 'easeInOutQuad'
    });
}