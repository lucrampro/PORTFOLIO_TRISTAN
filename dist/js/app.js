

    console.log( window.performance.timing );

    function movie() {
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            $('#movie-desktop').remove();
        } else {
            $('#movie-mobile').remove();
        }
    }

    function burger() {
        //    MENU DEROULANT
        $(".burger").click(function () {
            
            if ($(".menu").width() === 0) {
                TweenMax.to(".menu", 1, {
                    width: "100%",
                    ease: Expo.easeInOut
                });
                $(".burger").addClass("open");
            } else {
                TweenMax.to(".menu", 1, {
                    width: "0%",
                    ease: Expo.easeInOut
                });
                $(".burger").removeClass("open");
            }
        });
    }
        


    $('document').ready(function () {

        movie();
        burger();

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

    TweenMax.to(".me", 1, {
        opacity: 1,
        bottom: 0,
        delay: 0.95
    });


    TweenMax.to(".fond", 0.5, {
        opacity: 0.6,
        delay: 1
    });



});

//# sourceMappingURL=app.js.map
