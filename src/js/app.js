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

    function pauseMovie() {
        $(document).scroll(function() {
            if( !isDevice ) {
                if( $(window).scrollTop() != 0 ) $('#movie-desktop').get(0).pause();
                else $('#movie-desktop').get(0).play();
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
                delay: 0.4
            });
        
            TweenMax.to( "." + n + " .fond", 0.5, {
                opacity: 0.6,
                delay: 1
            });

            TweenMax.to("." + n + " .icons li:nth-child(1) img", 0.3, {
                css: {
                    scale: 1
                },
                delay: 0.55
            });
        
            TweenMax.to("." + n + " .icons li:nth-child(2) img", 0.3, {
                css: {
                    scale: 1
                },
                delay: 0.55
            });
            TweenMax.to("." + n + " .icons li:nth-child(3) img", 0.3, {
                css: {
                    scale: 1
                },
                delay: 0.65
            });
            TweenMax.to("." + n + " .icons li:nth-child(4) img", 0.3, {
                css: {
                    scale: 1
                },
                delay: 0.70
            });
            TweenMax.to("." + n + " .icons li:nth-child(5) img", 0.3, {
                css: {
                    scale: 1
                },
                delay: 0.75
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
        // pauseMovie();
        burger();
        menuColor();
        showDesc();

    });
