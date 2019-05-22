

( function() {

    var youtube = document.querySelectorAll( ".youtube_img" );
    
    for (var i = 0; i < youtube.length; i++) {
        
        var source = "https://img.youtube.com/vi/"+ youtube[i].dataset.embed +"/sddefault.jpg";
        
        var image = new Image();
                image.src = source;
                image.addEventListener( "load", function() {
                    youtube[ i ].appendChild( image );
                }( i ) );
        
                youtube[i].addEventListener( "click", function() {

                    var iframe = document.createElement( "iframe" );

                            iframe.setAttribute( "frameborder", "0" );
                            iframe.setAttribute( "allowfullscreen", "" );
                            iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ this.dataset.embed +"?rel=0&showinfo=0&autoplay=1" );

                            this.innerHTML = "";
                            this.appendChild( iframe );
                } );    
    };
    
} )();

( function() {

    var modalCifra = document.querySelectorAll( ".modalCifra" );
    
    for (var i = 0; i < modalCifra.length; i++) {

        // Ao clicar
        modalCifra[i].addEventListener( "click", function() {

            // Cria iframe
            var iframe = document.createElement( "iframe" );

                    // Define caracteristicas do iframe
                    iframe.setAttribute( "frameborder", "0" );
                    iframe.setAttribute( "width", "100%" );
                    iframe.setAttribute( "height", "550px" );
                    iframe.setAttribute( "scrolling", "auto" );

                    if (screen.width <= 800 || screen.height <= 600)
                        // Para telas menores, exibir a versão mobile da pagina
                        iframe.setAttribute( "src", "https://m.cifraclub.com.br/"+ this.dataset.embed );
                    else
                        // Para telas maiores, exibir a versão desktop da pagina
                        iframe.setAttribute( "src", "https://www.cifraclub.com.br/"+ this.dataset.embed);

                    // Adiciona iframe ao modal
                    document.querySelector(".modal_cifra").innerHTML = "";
                    document.querySelector(".modal_cifra").appendChild( iframe );
        } );    
    };

} )();

( function() {

    var modalLetra = document.querySelectorAll( ".modalLetra" );
    
    for (var i = 0; i < modalLetra.length; i++) {

        // Ao clicar
        modalLetra[i].addEventListener( "click", function() {

            // Cria iframe
            var iframe = document.createElement( "iframe" );

                    // Define caracteristicas do iframe
                    iframe.setAttribute( "frameborder", "0" );
                    iframe.setAttribute( "width", "100%" );
                    iframe.setAttribute( "height", "550px" );
                    iframe.setAttribute( "scrolling", "auto" );

                    if (screen.width <= 800 || screen.height <= 600)
                        // Para telas menores, exibir a versão mobile da pagina
                        iframe.setAttribute( "src", "https://m.letras.mus.br/"+ this.dataset.embed );
                    else
                        // Para telas maiores, exibir a versão desktop da pagina
                        iframe.setAttribute( "src", "https://www.letras.mus.br/"+ this.dataset.embed);

                    // Adiciona iframe ao modal
                    document.querySelector(".modal_letra").innerHTML = "";
                    document.querySelector(".modal_letra").appendChild( iframe );
        } );    
    };

} )();