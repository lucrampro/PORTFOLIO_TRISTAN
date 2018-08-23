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
                    width: "100vw",
                    ease: Expo.easeInOut
                });
                $(".burger").addClass("open");
            } else {
                TweenMax.to(".menu", 1, {
                    width: "0vw",
                    ease: Expo.easeInOut
                });
                $(".burger").removeClass("open");
            }
        });
    }

    function menuColor() {
        if( $('body').hasClass('home') ) {
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
    }

    function pauseMovie() {
        $(document).scroll(function() {
            if( !isDevice && $('body').hasClass('home')) {
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


        if( $('body').hasClass('home') ) {

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
    }

    function lockMovie() {

        if ( isDevice ) {

            $('.movie .play').click(function() {
                $('.iframe').addClass('show');
            })

            $('.iframe .close').click(function() {
                $('.iframe').removeClass('show');
            })
        } 

    }

    function projects() {
        var showList;

        function showProject(m) {


            TweenMax.to(".projet.p" + m + " .number ", 1, {
                delay: 0.2,
                css: { scale: 3 },
                ease: Elastic.easeOut.config(1, 0.4)
            });
            
            TweenMax.to(".projet.p" + m + " .nbshadow", 1, {
                delay: .5,
                left: "51%",
                top: "51%",
                ease: Expo.easeInOut,
                // A Link
                onComplete:function(){
                    if( m === 1 ) $('.projet.p' + m + ' a').attr('href', 'p-psa.html');
                    else if( m === 2 ) $('.projet.p' + m + ' a').attr('href', 'p-coachy.html');
                    else if( m === 3 ) $('.projet.p' + m + ' a').attr('href', 'p-cream.html');
                    else if( m === 4 ) $('.projet.p' + m + ' a').attr('href', 'p-fff.html');
                    else if( m === 5 ) $('.projet.p' + m + ' a').attr('href', 'p-youphil.html');
                } 
            });
    
            TweenMax.to(".projet.p" + m + " .cacheLogo", 2, {
                delay: 1.2,
                rotation: "0",
                opacity: 0.9,
                ease: Elastic.easeOut.config(1, 0.3)
            });

            TweenMax.to(".projet.p" + m + " .cachedate span", 2, {
                delay: .8,
                opacity: 1,
                ease: Expo.easeInOut
            });
        }

        function reverse(n) {

            var m = n - 1;
            var v = n + 1;
    
            TweenMax.to(".projet.p" + m + " .cacheLogo", .1, {
                rotation: "100",
                opacity: 0
            });
            TweenMax.to(".projet.p" + v + " .cacheLogo", .1, {
                rotation: "100",
                opacity: 0
            });

            TweenMax.to(".projet.p" + m + " .number ", 1, {
                css: { scale: 1 },
                ease: Elastic.easeOut.config(1, 0.4)
            });
            TweenMax.to(".projet.p" + v + " .number ", 1, {
                css: { scale: 1 },
                ease: Elastic.easeOut.config(1, 0.4)
            });
            
            TweenMax.to(".projet.p" + m + " .nbshadow", 1, {
                left: "50%",
                top: "50%",
                ease: Expo.easeInOut,
            });
            TweenMax.to(".projet.p" + v + " .nbshadow", 1, {
                left: "50%",
                top: "50%",
                ease: Expo.easeInOut,
            });
            TweenMax.to(".projet.p" + m + " .cachedate span", .3, {
                opacity: 0
            });
            TweenMax.to(".projet.p" + v + " .cachedate span", .3, {
                opacity: 0
            });

            // A Link remove
            $('.projet.p' + m + ' a').removeAttr("href");
            $('.projet.p' + v + ' a').removeAttr("href");
        }

        function showList(n) {
            $('.projet.p' + n).click(function() {
                $('.list').attr('class', 'list p' + n);
                showProject(n);
                reverse(n);
            })
        }

        showProject(1);
        showList(1);
        showList(2);
        showList(3);
        showList(4);
        showList(5);

    }

    function project() {

        if( $('.projet-page').length != 0 && !isDevice && $('.projet-page.psa').length == 0 ) var rellax = new Rellax('.rellax');
        TweenMax.to(".cacheImg img", 1, { x:0});
        TweenMax.to(".cacheImg img", 3, {  opacity:1 });

    }

    function barba() {

        var FadeTransition = Barba.BaseTransition.extend({
            start: function() {
            /**
             * This function is automatically called as soon the Transition starts
             * this.newContainerLoading is a Promise for the loading of the new container
             * (Barba.js also comes with an handy Promise polyfill!)
             */
        
            // As soon the loading is finished and the old page is faded out, let's fade the new page
            Promise
                .all([this.newContainerLoading, this.fadeOut()])
                .then(this.fadeIn.bind(this));
            },
        
            fadeOut: function() {
            /**
             * this.oldContainer is the HTMLElement of the old Container
             */
        
            return $(this.oldContainer).animate({ opacity: 0 }).promise();
            //    return TweenMax.to(".list .projet.p1 .circle", 1, {
            //         css: { scale: 2000 },
            //         x: '-50%',
            //         y: '-50%',
            //         ease: Expo.easeInOut
            //     }).promise();
            },
        
            fadeIn: function() {
            /**
             * this.newContainer is the HTMLElement of the new Container
             * At this stage newContainer is on the DOM (inside our #barba-container and with visibility: hidden)
             * Please note, newContainer is available just after newContainerLoading is resolved!
             */
        
            var _this = this;
            var $el = $(this.newContainer);
        
            $(this.oldContainer).hide();
        
            $el.css({
                visibility : 'visible',
                opacity : 0
            });

        
            $el.animate({ opacity: 1 }, 0.001, function() {
                /**
                 * Do not forget to call .done() as soon your transition is finished!
                 * .done() will automatically remove from the DOM the old Container
                 */
        
                _this.done();
            });
            }
        });
        
        Barba.Pjax.getTransition = function() {
            /**
             * Here you can use your own logic!
             * For example you can use different Transition based on the current page or link...
             */


            console.log( Barba.HistoryManager.history );

            // if (FromHomeSlider.valid()) {
            //     return FromHomeSlider;
            // }

            // if (PortfolioToCaseStudy.valid()) {
            //     return PortfolioToCaseStudy;
            // }

            // if (CaseStudyReadMore.valid()) {
            //     return CaseStudyReadMore;
            // }

            // if (CaseStudySibling.valid()) {
            //     return CaseStudySibling;
            // }

            return FadeTransition;

        };

        var bProjets = Barba.BaseView.extend({
            namespace: 'projets',
            onEnter: function() {
                console.log('b_Projets > onEnterCompleted');
                // TweenMax.to(".list .projet.p1 .circle", 10, {
                //     css: { scale: 2000 },
                //     x: '-50%',
                //     y: '-50%',
                //     ease: Expo.easeInOut,
                //     onComplete: function() {
                //         console.log('complete');
                //     }
                // });
            },
            onEnterCompleted: function() {
                console.log('b_Projets > onEnterCompleted');
            },
            onLeave: function() {

            },
            onLeaveCompleted: function() {
                console.log('b_Projets > onLeaveCompleted');
                
          
            }
        });

        var bProjet = Barba.BaseView.extend({
            namespace: 'projet',
            onEnter: function() {
                console.log('projet > onEnter');
            },
            onEnterCompleted: function() {
                console.log('projet > onEnterCompleted');
            },
            onLeave: function() {
                console.log('projet > onLeave');
            },
            onLeaveCompleted: function() {
                console.log('projet > onLeaveCompleted');
            }
        });
        
        // init 
        bProjet.init();
        bProjets.init();
    }

















    // Barba.Dispatcher.on('transitionCompleted', function(currentStatus, oldStatus, container) {

    //     // barba();
    //     movie();
    //     pauseMovie();
    //     burger();
    //     menuColor();
    //     showDesc();
    //     // lockMovie();
    //     projects();
    //     project();

    // });

    Barba.Dispatcher.on('linkClicked', function() {
        console.log('link: ', $(this));
    });

    $('document').ready(function () {

        barba();
        movie();
        pauseMovie();
        burger();
        menuColor();
        showDesc();
        // lockMovie();
        projects();
        project();

        // Barba.Pjax.start();

    });

//# sourceMappingURL=app.js.map
