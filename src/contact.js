$(document).ready(() => {

    $('form[name="contact-me"]').validate({
        rules: {
            email:{
                required: true,
                email: true,
            },         
        },
        messages: {
            email:{
                required: 'elcampo de mail es obligatorio',
                email: 'ingresa un mail valido',
            }
        },
        submitHandler: function(form){
            console.log('hola')
        }
    });
})