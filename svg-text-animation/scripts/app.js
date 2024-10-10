anime({
    targets: '.text path',
    strokeDashoffset: [anime.setDashoffset, 0],
    duration: 3000,
    easing: 'easeOutQuad',
    loop: true,
    direction: 'alternate',
    delay: anime.stagger(200)
});