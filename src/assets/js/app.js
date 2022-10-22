import * as prdkFunctions from "./modules/functions.js";

prdkFunctions.isWebP();

/* changes in direction */

let elA = document.querySelectorAll("a"),
    elH1 = document.querySelectorAll("h1"),
    elH2 = document.querySelectorAll("h2"),
    elH3 = document.querySelectorAll("h3"),
    elH4 = document.querySelectorAll("h4"),
    elH5 = document.querySelectorAll("h5"),
    elH6 = document.querySelectorAll("h6"),
    elInput = document.querySelectorAll("input"),
    elP = document.querySelectorAll("p");

for (let elem of elA) {
    elem.setAttribute("dir", "rtl");
}
for (let elem of elH1) {
    elem.setAttribute("dir", "rtl");
}
for (let elem of elH2) {
    elem.setAttribute("dir", "rtl");
}
for (let elem of elH3) {
    elem.setAttribute("dir", "rtl");
}
for (let elem of elH4) {
    elem.setAttribute("dir", "rtl");
}
for (let elem of elH5) {
    elem.setAttribute("dir", "rtl");
}
for (let elem of elH6) {
    elem.setAttribute("dir", "rtl");
}
for (let elem of elInput) {
    elem.setAttribute("dir", "rtl");
}
for (let elem of elP) {
    elem.setAttribute("dir", "rtl");
}

/* END changes in direction */

/* list country */
$(document).ready(function() {

let butListCountry = $('#form_1'),
    butListCountry2 = $('#form_2'),
    listCountry = $('#form_list_1'),
    listCountry2 = $('#form_list_2'),
    listCountryOpen = false,
    listCountryOpen2 = false;

    let listCountryAll_1 = $('.upper__form__listAll--wrap li');
    let listCountryAll_2 = $('.footer__form__listAll--wrap li');

    butListCountry.on("click", function (){
        if (!listCountryOpen && listCountryAll_1.length > 1){
            listCountryOpen = true;
            listCountry.removeClass("upper__form__listAll--closed");
        }
        else {
            listCountryOpen = false;
            listCountry.addClass("upper__form__listAll--closed");
        }
    });

    butListCountry2.on("click", function (){
        if (!listCountryOpen && listCountryAll_2.length > 1){
            listCountryOpen2 = true;
            listCountry2.removeClass("footer__form__listAll--closed");
        }
        else {
            listCountryOpen2 = false;
            listCountry2.addClass("footer__form__listAll--closed");
        }
    });

    let listCountryElement = $('.upper__form__listAll--wrap li');
    let listCountryElement2 = $('.footer__form__listAll--wrap li');

    listCountryElement.on("click", function (){
        let thisText = $(this).find('p').text();
        let src = $(this).find('img').attr('src');
        let newStr = '<p dir="rtl">'+thisText+'</p><img src="'+src+'" alt="Izrail">';
        $('.upper__form__list--text').html(newStr);
        listCountryOpen = false;
        listCountry.addClass("upper__form__listAll--closed");
    });

    listCountryElement2.on("click", function (){
        let thisText = $(this).find('p').text();
        let src = $(this).find('img').attr('src');
        let newStr = '<p dir="rtl">'+thisText+'</p><img src="'+src+'" alt="Izrail">';
        $('.footer__form__list--text').html(newStr);
        listCountryOpen2 = false;
        listCountry2.addClass("footer__form__listAll--closed");
    });

/* END list county */

    /* faq */

    let questionBlock = $(".faq__block__question"),
        questionI = $('.faq__block__question i'),
        answerBlock = $(".faq__block__answer");

    questionBlock.on("click", function (){
        let select = $(this).attr('data-question-select');
        if (select == 'off'){
            answerBlock.slideUp();
            $(this).next().slideDown();
            questionBlock.attr('data-question-select', 'off');
            $(this).attr('data-question-select', 'on');
            questionI.css('transform', 'rotate(0deg)');
            $(this).find('i').css('transform', 'rotate(45deg)');

        }
        else {
            questionBlock.attr('data-question-select', 'off');
            answerBlock.slideUp();
            questionI.css('transform', 'rotate(0deg)');
        }
    });

    /* END faq */

    /* cookie */

    let cookieBut = $('.cookie__button span'),
        cookieMess = $('.cookie__mess'),
        cookieWrap = $('.cookie'),
        cookieOpen = false,
        cookie__open = $('.cookie__open'),
        cookie__close = $('.cookie__close'),
        cookieMask = $('.footer__mask');

    let cookieMessHeight = cookieMess.height();
    cookieMask.css('height', cookieMessHeight);

    cookieBut.on("click", function (){
        if (!cookieOpen){
            cookie__open.show();
            cookie__close.hide();
            cookieOpen = true;
            cookieWrap.animate({bottom: "-"+cookieMessHeight+"px"}, 500);
            cookieMask.hide(500);
        }
        else {
            cookie__open.hide();
            cookie__close.show();
            cookieOpen = false;
            cookieWrap.animate({bottom: 0}, 500);
            cookieMask.show(500);
        }
    });

    /* END cookie */

    /* Check Form */

    let form_but_1 = $('#form_but_1 input');
    let form_but_2 = $('#form_but_2 input');
    let checkInput_1 = $('.checkInput_1-check');
    let checkInput_2 = $('.checkInput_2-check');
    let checkInput_1_select = true;
    let checkInput_2_select = true;
    let checkInput_el_1 = $('.checkInput_el_1');
    let checkInput_el_2 = $('.checkInput_el_2');
    let checkForm_1 = true;
    let checkForm_2 = true;
    const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    function isEmailValid(value) {
        return EMAIL_REGEXP.test(value);
    }

    function checkInputsData (checkInput)
    {
        let elements = $(checkInput);
        let resCheck = true;
        for (let i = 0; i < elements.length; i++)
        {
            let valID = elements[i].getAttribute('data-input');
            if (elements[i].value !== '')
            {
                let valEl = elements[i].value;
                // tell
                if (valID === 'phone')
                {
                    if (valEl.length < 9)
                    {
                        $(checkInput+"[name="+valID+"]").parent('.wrapInput').removeClass('form-border-ok');
                        $(checkInput+"[name="+valID+"]").parent('.wrapInput').addClass('form-border-nok');
                        resCheck = false;
                    }
                }
                // email
                if (valID === 'email')
                {
                    if (!isEmailValid(valEl))
                    {
                        $(checkInput+"[name="+valID+"]").parent('.wrapInput').removeClass('form-border-ok');
                        $(checkInput+"[name="+valID+"]").parent('.wrapInput').addClass('form-border-nok');
                        resCheck = false;
                    }
                }
            }
            else {
                console.log(valID)
                $(checkInput+"[name="+valID+"]").parent('.wrapInput').removeClass('form-border-ok');
                $(checkInput+"[name="+valID+"]").parent('.wrapInput').addClass('form-border-nok');
                resCheck = false;
            }
        }
        return resCheck;
    }

    form_but_1.on("click", function (){
        let resCheck = checkInputsData('.checkInput_1');
        if (resCheck && checkForm_1){
            $('#form_01')[0].submit();
        }
    })

    form_but_2.on("click", function (){
        let resCheck = checkInputsData('.checkInput_2');
        if (resCheck && checkForm_2){
            $('#form_02')[0].submit();
        }
    })

    checkInput_1.on("click", function (){
        if (checkInput_1_select){
            checkInput_1_select = false;
            checkInput_el_1.removeClass("check");
            checkInput_el_1.addClass("no-check");
            $(this).find('i').css('opacity', '0');
            checkForm_1 = false;
        }
        else {
            checkInput_1_select = true;
            checkInput_el_1.removeClass("no-check");
            checkInput_el_1.addClass("check");
            $(this).find('i').css('opacity', '1');
            checkForm_1 = true;
        }
    });

    checkInput_2.on("click", function (){
        if (checkInput_2_select){
            checkInput_2_select = false;
            checkInput_el_2.removeClass("check");
            checkInput_el_2.addClass("no-check");
            $(this).find('i').css('opacity', '0');
            checkForm_2 = false;
        }
        else {
            checkInput_2_select = true;
            checkInput_el_2.removeClass("no-check");
            checkInput_el_2.addClass("check");
            $(this).find('i').css('opacity', '1');
            checkForm_2 = true;
        }
    });

    /* END Check Form */

});




