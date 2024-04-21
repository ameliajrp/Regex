$(function () {
    const namaRegex = /^[a-zA-Z\s]*$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.[a-z])(?=.[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    const teleponRegex = /^\d{10,14}$/;
    const pesanRegex = /.+/;

    $('input').each(function () {
        $(this).on('input', function () {
            const pElement = $(this).parent().siblings().filter('p');

            if ($(this).attr('id') == 'name') {
                if (namaRegex.test($(this).val())) {
                    pElement.html('Valid Name');
                    pElement.removeClass('text-rose-300');
                    pElement.addClass('text-emerald-300');
                } else {
                    pElement.html('Invalid Name! Must contain only letters and spaces.');
                    pElement.removeClass('text-emerald-300');
                    pElement.addClass('text-rose-300');
                }
            } else if ($(this).attr('id') == "email") {
                if (emailRegex.test($(this).val())) {
                    pElement.html('Valid Email');
                    pElement.removeClass('text-rose-300');
                    pElement.addClass('text-emerald-300');
                } else {
                    pElement.html('Invalid Email! Must be in the format user@example.com.');
                    pElement.removeClass('text-emerald-300');
                    pElement.addClass('text-rose-300');
                }
            } else if ($(this).attr('id') == "password") {
                if (passwordRegex.test($(this).val())) {
                    pElement.html('Valid Password');
                    pElement.removeClass('text-rose-300');
                    pElement.addClass('text-emerald-300');
                } else {
                    pElement.html('Invalid Password! Must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, and one digit.');
                    pElement.removeClass('text-emerald-300');
                    pElement.addClass('text-rose-300');
                }
            } else if ($(this).attr('id') == "phone") {
                if (teleponRegex.test($(this).val())) {
                    pElement.html('Valid Phone Number');
                    pElement.removeClass('text-rose-300');
                    pElement.addClass('text-emerald-300');
                } else {
                    pElement.html('Invalid Phone Number! Must be between 10 and 14 digits.');
                    pElement.removeClass('text-emerald-300');
                    pElement.addClass('text-rose-300');
                }
            }
        })
    })

    // Validasi pesan
    $('#message').on('input', function () {
        const pElement = $(this).parent().siblings().filter('p');
        const isMatch = $(this).val().match(pesanRegex);
        if (isMatch) {
            pElement.html('Message contains ' + isMatch.length + (isMatch.length < 2 ? ' duplicate' : ' duplicates') + ' 😲');
            pElement.removeClass('text-rose-300');
            pElement.addClass('text-emerald-300');
        } else {
            pElement.html('Message does not contain any duplicates 😊');
            pElement.removeClass('text-rose-300');
            pElement.addClass('text-emerald-300');
        }
    });
});