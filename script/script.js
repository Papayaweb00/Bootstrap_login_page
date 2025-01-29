$(document).ready(function () {
    $("#text").on({
        focus: function () {
            $("#icon1").addClass("change");
        },
        blur: function () {
            $("#icon1").removeClass("change");
        }
    })

    $("#pass").on({
        focus: function () {
            $("#icon2").addClass("change");
        },
        blur: function () {
            $("#icon2").removeClass("change");
        }
    })
})