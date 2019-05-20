

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
    var destin_modal_cifra = document.querySelectorAll(".modal_cifra") 
    
    for (var i = 0; i < modalCifra.length; i++) {
        
        // var source = "https://img.youtube.com/vi/"+ youtube[i].dataset.embed +"/sddefault.jpg";

        modalCifra[i].addEventListener( "click", function() {

            var iframe = document.createElement( "iframe" );

                    iframe.setAttribute( "frameborder", "0" );
                    iframe.setAttribute( "width", "100%" );
                    iframe.setAttribute( "height", "500px" );
                    iframe.setAttribute( "scrolling", "auto" );

                    iframe.setAttribute( "src", "https://www.cifraclub.com.br/"+ this.dataset.embed );

                    // alert(this.dataset.embed);

                    document.querySelector(".modal_cifra").innerHTML = "";
                    document.querySelector(".modal_cifra").appendChild( iframe );
        } );    
    };
    
} )();