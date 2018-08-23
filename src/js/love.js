var isDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
//
// BLOC TOP
//

if (isDevice) {

    TweenMax.to('.blocTop h1', 1, {
        opacity: 1,
        onComplete: function () {
            TweenMax.to(".shadow", 1, {
                top: '50.5%',
                left: "50.5%",
                opacity: 0.3
            });
        }
    });


} else {


    TweenMax.to('.blocTop h1', 1, {
        opacity: 1,
        onComplete: function () {
            TweenMax.to(".shadow", 1, {
                bottom: '9.5%',
                left: "50.5%",
                opacity: 0.3
            });
        }
    });
}

//
// BLOC MIDDLE
//

TweenMax.to('.devoileTest', 0.5, { y:0, opacity:1, delay:0 });

TweenMax.to('.devoileTest1', 0.5, { y:0, opacity:1, delay:0.1 });

TweenMax.to('.devoileTest2', 0.5, { y:0, opacity:1, delay:0.2 });

TweenMax.to('.devoileTest3', 0.5, { y:0, opacity:1, delay:0.3 });

TweenMax.to('.devoileTest4', 0.5, { y:0, opacity:1, delay:0.4 });

TweenMax.to('.devoileTest5', 0.5, { y:0, opacity:1, delay: 0.5 });

TweenMax.to('.devoileTest6', 0.5, { y:0, opacity:1, delay:0.6 });

TweenMax.to('.devoileTest7', 0.5, { y:0, opacity:1, delay:0.7 });

TweenMax.to('.devoileTest8', 0.5, { y:0, opacity:1, delay:0.8 });

TweenMax.to('.devoileTest9', 0.5, { y:0, opacity:1, delay:0.9 });

TweenMax.to('.devoileTest10', 0.5, { y:0, opacity:1, delay:1 });

//TweenMax.to('.devoileTest', 0.5, { y:0, delay:1 });


//
// BLOC MIDDLE
//


