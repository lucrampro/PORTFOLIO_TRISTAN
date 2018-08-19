

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
        TweenMax.to("h1", 1, {
            delay: 0.3,
            x: "0",
            opacity: "1",
            ease: Expo.easeInOut
        });

        TweenMax.to('.gostJaune', 1, {
            delay: 0.6,
            width: "80%",
            ease: Expo.easeInOut,
            onComplete: function () {

                TweenMax.to("p", 0.3, {
                    opacity: "1",
                    onComplete: function () {

                        TweenMax.to(".USA", 0.3, {

                            css: {
                                scale: 1
                            },
                            ease: Back.easeOut.config(1.7)
                        });


                        TweenMax.to(".POLY", 0.3, {

                            delay: 0.1,
                            css: {
                                scale: 1
                            },
                            ease: Back.easeOut.config(1.7)
                        });


                        TweenMax.to(".SUI", 0.3, {

                            delay: 0.15,
                            css: {
                                scale: 1
                            },
                            ease: Back.easeOut.config(1.7)
                        });


                        TweenMax.to(".UK", 0.3, {

                            delay: 0.20,
                            css: {
                                scale: 1
                            },
                            ease: Back.easeOut.config(1.7)
                        });


                        TweenMax.to(".ES", 0.3, {

                            delay: 0.25,
                            css: {
                                scale: 1
                            },
                            ease: Back.easeOut.config(1.7)
                        });

                        TweenMax.to(".POR", 0.3, {

                            delay: 0.30,
                            css: {
                                scale: 1
                            },
                            ease: Back.easeOut.config(1.7)
                        });

                        TweenMax.to(".PAK", 0.3, {

                            delay: 0.35,
                            css: {
                                scale: 1
                            },
                            ease: Back.easeOut.config(1.7)
                        });

                        TweenMax.to(".IND", 0.3, {

                            delay: 0.40,
                            css: {
                                scale: 1
                            },
                            ease: Back.easeOut.config(1.7)
                        });

                        TweenMax.to(".MALI", 0.3, {

                            delay: 0.45,
                            css: {
                                scale: 1
                            },
                            ease: Back.easeOut.config(1.7)
                        });

                        TweenMax.to(".MALA", 0.3, {

                            delay: 0.50,
                            css: {
                                scale: 1
                            },
                            ease: Back.easeOut.config(1.7),
                        });

                        TweenMax.to(".holiday", 0.5, {
                            delay: 0.45,
                            x: "-50%",
                            scale: 1,
                            opacity: 1,
                            ease: Bounce.easeOut
                        });



                    }
                });
            }
        });
    });


