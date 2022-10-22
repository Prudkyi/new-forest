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

$(document).ready(function() {

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

                let valEl = elements[i].value;

                // name
                if (valID === 'name')
                {
                    let nameVal = $(checkInput+"[name="+valID+"]").val();
                    if (nameVal.length < 2 || nameVal == "שם") {
                        $(checkInput+"[name="+valID+"]").parent('.wrapInput').removeClass('form-border-ok');
                        $(checkInput+"[name="+valID+"]").parent('.wrapInput').addClass('form-border-nok');
                        alert("אנא מלא את שדה השם");
                        $(checkInput+"[name="+valID+"]").focus();
                        resCheck = false;
                    }
                    else {
                        $(checkInput+"[name="+valID+"]").parent('.wrapInput').removeClass('form-border-nok');
                        $(checkInput+"[name="+valID+"]").parent('.wrapInput').addClass('form-border-ok');
                    }
                }
                // tell
                if (valID === 'phone')
                {
                    let phoneVal = $(checkInput+"[name="+valID+"]").val();
                    if (phoneVal == null || phoneVal.length < 9 || phoneVal.length > 11 || phoneVal.charAt(0) != 0)
                    {
                        $(checkInput+"[name="+valID+"]").parent('.wrapInput').removeClass('form-border-ok');
                        $(checkInput+"[name="+valID+"]").parent('.wrapInput').addClass('form-border-nok');
                        alert("אנא הזן מספר טלפון");
                        if (resCheck)  $(checkInput+"[name="+valID+"]").focus();
                        resCheck = false;
                    }
                    else {
                        $(checkInput+"[name="+valID+"]").parent('.wrapInput').removeClass('form-border-nok');
                        $(checkInput+"[name="+valID+"]").parent('.wrapInput').addClass('form-border-ok');
                    }
                }
                // email
                if (valID === 'email')
                {
                    if (!isEmailValid(valEl))
                    {
                        $(checkInput+"[name="+valID+"]").parent('.wrapInput').removeClass('form-border-ok');
                        $(checkInput+"[name="+valID+"]").parent('.wrapInput').addClass('form-border-nok');
                        alert('אנא הכנס אי מייל תקין');
                        if (resCheck) $(checkInput+"[name="+valID+"]").focus;
                        resCheck = false;
                    }
                    else {
                        $(checkInput+"[name="+valID+"]").parent('.wrapInput').removeClass('form-border-nok');
                        $(checkInput+"[name="+valID+"]").parent('.wrapInput').addClass('form-border-ok');
                    }
                }

        }
        return resCheck;
    }

    form_but_1.on("click", function (){
        let resCheck = checkInputsData('.checkInput_1');
        let resInput1 = false;
        let resCheck1 = false;
        if (resCheck) resInput1 = true;
        if (checkForm_1) resCheck1 = true;
        else {
            $('.checkInput_el_1').addClass('form-border-nok');
        }
        if (resInput1 && resCheck1) $('#form_01')[0].submit();
    })

    form_but_2.on("click", function (){
        let resCheck = checkInputsData('.checkInput_2');
        let resInput2 = false;
        let resCheck2 = false;
        if (resCheck) resInput2 = true;
        if (checkForm_2) resCheck2 = true;
        else {
            $('.checkInput_el_2').addClass('form-border-nok');
        }
        if (resInput2 && resCheck2) $('#form_01')[0].submit();
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
            $(this).removeClass('form-border-nok');
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
            $(this).removeClass('form-border-nok');
        }
    });

    /* END Check Form */

});






