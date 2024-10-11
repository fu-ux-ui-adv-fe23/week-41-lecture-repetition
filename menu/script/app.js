const menuToggleRef = document.querySelector('.toggle');
const navRef = document.querySelector('nav');
const navItemRefs = document.querySelectorAll('nav a');
// const headingRef = document.querySelector('h1');
let isMenuOpen = false;
// let isHeadingUp = false;

// headingRef.addEventListener('click', () => {
//     if(isHeadingUp) {
//         toggleHeading('reverse');
//     } else {
//         toggleHeading('normal');
//     }
//     isHeadingUp = !isHeadingUp;
// });

menuToggleRef.addEventListener('click', () => {
    if(isMenuOpen) {
        console.log('Stänga menyn');
        anime({
            targets: navItemRefs,
            translateX: '-2rem',
            opacity: 0,
            duration: 400,
            delay: anime.stagger(200),
            complete: () => {
                hideMenu();
            }
        }) 
    } else {
        console.log('show menu');
        showMenu();
    }

    isMenuOpen = !isMenuOpen;
})

function hideMenu() {
    const timeline = anime.timeline({
        easing: 'easeOutCubic'
    });

    timeline.add({
        targets: navRef,
        height: '1rem',
        padding: 0,
        top: '50%',
        duration: 400
    })
    .add({
        targets: navRef,
        height: 0,
        duration: 400
    });
}

function showMenu() {
    const timeline = anime.timeline({
        easing: 'easeOutCubic'
    });

    timeline.add({
        targets: navRef,
        width: '100vw',
        height: '1rem',
        opacity: 1,
        duration: 400
    })
    .add({
        targets: navRef,
        height: '100vh',
        top: 0,
        padding: '8rem 0 0 2rem',
        duration: 400
    })
    .add({
        targets: navItemRefs,
        translateX: 0,
        opacity: 1,
        duration: 400,
        delay: anime.stagger(200)
    });
}

// function toggleHeading(direction) {
//     const timeline = anime.timeline({
//         easing: 'easeInOutQuad',
//         direction: direction
//     });

//     timeline.add({
//         targets: headingRef,
//         translateY: 0,
//         color: '#000'
//     })
//     .add({
//         targets: headingRef,
//         translateY: '-4rem',
//         color: '#000'
//     })
//     .add({
//         targets: headingRef,
//         translateY: '-4rem',
//         color: '#ff0000'
//     });
// }