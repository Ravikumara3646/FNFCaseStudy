$(document).ready(function () {

    $(".progressButtons").click(function () {
        $("#Productdetails").hide();
        $("#Reviewdetails").hide();
        $("#Summarydetails").hide();
        $("#Paymentdetails").hide();

        var cntrlID = $(this).attr('id');
        var divID = cntrlID.replace('btn', '')
        $('#' + divID).show();
        $('#' + divID).removeClass('hide')
    });

    $('.card-header').click(function () {
        $(this).find('i').toggleClass('fa fa-plus fa fa-minus');
    });

    $('.Progress').click(function () {
        $(this).parent().children().removeClass('Progress-inactive');
        $(this).parent().children().removeClass('Progress-active');
        $(this).parent().children().removeClass('line-bar-inactive');
        $(this).parent().children().removeClass('line-bar-active');
        $(this).prevAll('div').addClass('line-bar-active');
        $(this).prevAll().addClass('Progress-active');
        $(this).addClass('Progress-active');
        $(this).next().addClass('line-bar-active');
        displaySection($(this));
    });

    $('.buttonClick').click(function () {
        var progressID = $(this).attr('progressID');
        $('#' + progressID).click();

    });
});

function displaySection(obj) {

    $("#Productdetails").addClass('hide');
    $("#Reviewdetails").addClass('hide');
    $("#Summarydetails").addClass('hide');
    $("#Paymentdetails").addClass('hide');

    var cntrlID = $(obj).attr('id');
    var divID = cntrlID.replace('btn', '');
    $('#' + divID).removeClass('hide');
}

function moveToSlide(slideIndex) {
    $('#carouselID').carousel(slideIndex);
}