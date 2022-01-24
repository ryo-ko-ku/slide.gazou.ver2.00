// JavaScript source code

$(function () {

    function noneBtn() {
        let slideIndex = $(".slide").index($(".active"))
        $(".change-btn").show();
        if (slideIndex == $(".slide").length-1) {
            $(".prev-btn").hide();
        } else if (slideIndex == 3) {
            $(".next-btn").hide();
        }

    };

    $(".index-btn").click(function () {
        $(".active").removeClass("active");
        let indexNumber = $(".index-btn").index($(this));
        $(".slide").eq(indexNumber).addClass("active");
        noneBtn();
    });

    $(".change-btn").click(function () {
        let $displaySlide = $(".active");
        $displaySlide.removeClass("active");

        if ($(this).hasClass("next-btn")) {
            $displaySlide.next().addClass("active");
        } else {
                $displaySlide.prev.addClass("active");
        }

        noneBtn();

    });

});