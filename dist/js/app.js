$('document').ready(function () {


    //    MENU DEROULANT
    $(".burger").click(function () {

        if ($(".menu").width() === 0) {

            TweenMax.to(".menu", 1, {
                width: "100%",
                ease: Expo.easeInOut
            });

        } else {

            TweenMax.to(".menu", 1, {
                width: "0%",
                ease: Expo.easeInOut
            });
        }
        $(".burger").toggleClass("open");
    });



});
//# sourceMappingURL=app.js.map
