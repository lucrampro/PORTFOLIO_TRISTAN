var isDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
var w = $(window).width();
var h = $(window).height();

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

    function menuColor() {
        $(document).scroll(function() {
            var distance = Math.round( $(window).scrollTop() - $('.desc.dev').offset().top + ($('.menu').height() / 2) );

            if( !isDevice ) {
                if( distance < 0 ) {
                    $('.name').removeClass('scroll');
                    $('.menu').removeClass('scroll');
                } else {
                    $('.name').addClass('scroll');
                    $('.menu').addClass('scroll');
                }
            }
          });
    }

    function showDesc() {
        var v = h / 1.5;
        var devLaunch,
            dadLaunch,
            voyLaunch = false;

        function initDesc(n) {

            TweenMax.to( "." + n + " .cacheTitle h1", 0.8, {
                y: "-2%",
                ease: Expo.easeInOut
            });
            TweenMax.to( "." + n + " .cacheJaune", 0.8, {
                delay: 0.2,
                width: "100%",
                ease: Expo.easeInOut
            });
            TweenMax.to( "." + n + " .cacheP p", 0.8, {
                delay: 0.15,
                y: "15%",
                ease: Expo.easeInOut,
            });

            TweenMax.to( "." + n + " .me", 1, {
                opacity: 1,
                bottom: 0,
                delay: 0.95
            });
        
            TweenMax.to( "." + n + " .fond", 0.5, {
                opacity: 0.6,
                delay: 1
            });
        }

        $(document).scroll(function() {
            var distDev = Math.round( $(window).scrollTop() - $('.desc.dev').offset().top + v );
            var distDad = Math.round( $(window).scrollTop() - $('.desc.daddy').offset().top + v );
            var distVoy = Math.round( $(window).scrollTop() - $('.desc.voyage').offset().top + v );
            console.log(distDev, distDad, distVoy);

            if( distDev > 0 && !devLaunch ) {
                initDesc('dev');
                devLaunch = true;
            }
            if( distDad > 0 && !dadLaunch ) {
                initDesc('daddy');
                dadLaunch = true;
            }
            if( distVoy > 0 && !voyLaunch) {
                initDesc('voyage');
                voyLaunch = true;
            }
        });
    }
        


    $('document').ready(function () {

        movie();
        burger();
        menuColor();
        showDesc();

    //    PAGE VOYAGE



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





});
