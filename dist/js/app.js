$('document').ready(function () {

    //    MENU DEROULANT
    $(".burger").click(function () {

        if ($(".menu").width() === 0) {

            TweenMax.to(".menu", 1, {
                width: "100%",
                ease: Expo.easeInOut
            });

        } else {

            TweenMax.to(".menu", 0.5, {
                width: "0%",
                ease: Expo.easeInOut
            });
        }
        $(".burger").toggleClass("open");
    });
    //    PAGE VOYAGE

    TweenMax.to(".cacheTitle h1", 0.8, {

        y: "-2%",
        ease: Expo.easeInOut
    });
    TweenMax.to(".cacheJaune", 0.8, {
        delay: 0.2,
        width: "100%",
        ease: Expo.easeInOut
    });

    TweenMax.to(".cacheP p", 0.8, {
        delay: 0.15,
        y: "15%",
        ease: Expo.easeInOut,
    });


    TweenMax.to(".USA", 0.3, {
        css: {
            scale: 1
        },
        delay: 0.55
    });

    TweenMax.to(".Polyn", 0.3, {
        css: {
            scale: 1
        },
        delay: 0.55
    });
    TweenMax.to(".Suisse", 0.3, {
        css: {
            scale: 1
        },
        delay: 0.65
    });
    TweenMax.to(".UK", 0.3, {
        css: {
            scale: 1
        },
        delay: 0.70
    });
    TweenMax.to(".Espagne", 0.3, {
        css: {
            scale: 1
        },
        delay: 0.75
    });
    TweenMax.to(".Portugal", 0.3, {
        css: {
            scale: 1
        },
        delay: 0.80
    });
    TweenMax.to(".Pakistan", 0.3, {
        css: {
            scale: 1
        },
        delay: 0.85
    });
    TweenMax.to(".India", 0.3, {
        css: {
            scale: 1
        },
        delay: 0.90
    });
    TweenMax.to(".Mali", 0.3, {
        css: {
            scale: 1
        },
        delay: 0.95

    });
    TweenMax.to(".Malaisie", 0.3, {
        css: {
            scale: 1
        },
        delay: 1
    });

    TweenMax.to(".holidays", 1, {
        opacity: 1,
        bottom: 0,
        delay: 0.95
    });









});
//# sourceMappingURL=app.js.map
