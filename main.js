

$(document).ready(function () {
    $("#navbar-frame").load("../Views/Navbar.html");
    $("#footer-frame").load("../Views/footer.html");

    $('.error-label').hide();

    $('#privacy-checkbox').on('click', function (e) {
        $(this).toggleClass('checked');
    });

    $(".quick-questions input[type='text']").on('blur', function () {
        FocusInput($(this));
    });

    $(".quick-questions input[type='email']").on('blur', function () {
        if (ValidateEmail($(this))) removeError($(this));
        else addError($(this))
    });

    $(".quick-questions input[type='tel']").on('blur', function () {
        if (ValidatePhoneNumber($(this))) removeError($(this));
        else addError($(this))
    });

    $('.quick-questions textarea').on('blur', function () {
        FocusInput($(this));
    });

    $('#submitForm').click(function (e) {
        e.preventDefault();
        $(".quick-questions input[type='tel']").blur();
        $(".quick-questions input[type='text']").blur();
        $(".quick-questions input[type='email']").blur();
        $('.quick-questions textarea').blur();
        var $name = $('#privacy-checkbox');
        if (!$name.hasClass("checked")) {
            alert("Please read our policy and check agree");
        }
    });
});

function FocusInput(inputControl) {
    if (inputControl.val().length <= 0) {
        addError(inputControl);
    } else {
        removeError(inputControl);
    }
}

function addError(inputControl, errorMessage) {
    var elem = inputControl.parent().parent();
    elem.find('label').css("display", "block");
    elem.removeClass('has-success').addClass('has-error').find('.custom-glyphicon').removeClass('glyphicon-ok').addClass('glyphicon-remove');
}

function removeError(inputControl) {
    var elem = inputControl.parent().parent();
    elem.find('label').css("display", "none");
    elem.removeClass('has-error').addClass('has-success').find('.custom-glyphicon').removeClass('glyphicon-remove').addClass('glyphicon-ok');
}

function ValidateEmail(inputControl) {
    var regEx = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    regEx.test(inputControl.val());
}

function ValidatePhoneNumber(inputControl) {
    var regEx = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    regEx.test(inputControl.val());
}