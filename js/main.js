// OGGETTO ESERCIZIO
// ricreo lo slider come fatto questa mattina (o da zero, o partendo dall’html [ref sempre mio repo su github]);
// faccio funzionare il tracciamento dei pallini anche in prev (stamattina lo abbiam fatto solo in next);
// creo anche la possibilità di poter navigare cliccando anche sui pallini (quindi se clicco sul pallino 3, l’img vista è la 3 e il pallino 3 rimane rosso);

$(document).ready(function() {


    // gestione evento su freccia sinistra
    $('.prev').click(
        prevImg
    );

    // gestione evento su freccia destra
    $('.next').click(
        nextImg
    );

    // gestione evento pallini
    $('.nav i').click(
        ballNav
    );



    function nextImg() {  // funzione next

        var imgActive = $('.images img.active');
        var ballActive = $('.nav i.active');

        imgActive.removeClass('active');
        ballActive.removeClass('active');


        if (imgActive.hasClass('last')) {
            $('.images img.first').addClass('active');
            $('.nav i.first').addClass('active');
        } else {
            imgActive.next().addClass('active');
            ballActive.next().addClass('active');
        }
    }


 function prevImg() {  // funzione prevImg

        var imgActive = $('.images img.active');
        var ballActive = $('.nav i.active');

        imgActive.removeClass('active');
        ballActive.removeClass('active');

        if(imgActive.hasClass('first')) {
            $('.images img.last').addClass('active');
            $('.nav i last').addClass('active')
        } else {
            imgActive.prev().addClass('active');
            ballActive.prev().addClass('active');

        }
    }

    function ballNav() {  // funzione per click da pallini

        // variabili
        var ball = $('.nav i');
        var img = $('.images img');

        ball.removeClass('active');
        img.removeClass('active');

        // focus e aggiunta classe sul pallino cliccato
        $(this).addClass('active').index(this);

        var correctImg = ball.index(this);


        // "attivazione" immagine corrispondente
        $('.images img').eq(correctImg).addClass('active');

    }








});
