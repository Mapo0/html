$(".clother").click(function () {
    //Устанавливаем ширину 100%
    $(this).css({ "width": "100%" });

    //Отображаем скрытое поле description, выстраиваем элементы.
    
    $(this).children().css({ "display": "inline" });
    $(this).children().children().css({ "display": "inline" });

    //Восстанавливаем значения полей
    $(".menu .clother").not(this).children().children().css({ "display": "block" });
    $(".menu .clother").not(this).children(".bar").css("display", "none");

    $(".menu .clother").not(this).css({ "width": '272px' });
    
    $(this).children().css({ "text-align": "center" });
    $(this).children().first().css({ "text-align": "left" ," border": "1px solid"});
    $(this).children().last().css({ "text-align": "right" ," border": "1px solid"});

});


//попап окна

$(function(){
    $('.search').on('click', popUpSearch);
});
function popUpSearch(){
    $('#popup1').show();
    $('.overlay').show();
}
$(function(){
    $('.overlay').click(function(){
        $('.overlay, .popup').hide();
    });
});

$(function(){
    $('.bucket').on('click', popUpBucket);
});
function popUpBucket(){
    $('#popup2').show();
    $('.overlay').show();

}
$(function(){
    $('.overlay').click(function(){
        $('.overlay, .popup').hide();
    });
});