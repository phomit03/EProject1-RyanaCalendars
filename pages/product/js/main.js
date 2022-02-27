$(document).ready(function(){

    var quantitiy=0;
       $('.quantity-right-plus').click(function(e){
            
            // Stop acting like a button
            e.preventDefault();
            // Get the field name
            var quantity = parseInt($('#quantity').val());
            
            // If is not undefined
                
                $('#quantity').val(quantity + 1);

              
                // Increment
            
        });

         $('.quantity-left-minus').click(function(e){
            // Stop acting like a button
            e.preventDefault();
            // Get the field name
            var quantity = parseInt($('#quantity').val());
            
            // If is not undefined
          
                // Increment
                if(quantity>0){
                $('#quantity').val(quantity - 1);
                }
        });
        
    });
    //loading
        $(window).on('load', function () {
            $(".loader").fadeOut();
            $("#preloader").delay(200).fadeOut("slow");
        });
    //slider detail
    $('#myCarousel').carousel({
        interval: false
      });
      $('#carousel-thumbs').carousel({
        interval: false
      });
      
      // handles the carousel thumbnails
      $('[id^=carousel-selector-]').click(function() {
        var id_selector = $(this).attr('id');
        var id = parseInt( id_selector.substr(id_selector.lastIndexOf('-') + 1) );
        $('#myCarousel').carousel(id);
      });
      // Only display 3 items in nav on mobile.
      if ($(window).width() < 575) {
        $('#carousel-thumbs .row div:nth-child(4)').each(function() {
          var rowBoundary = $(this);
          $('<div class="row mx-0">').insertAfter(rowBoundary.parent()).append(rowBoundary.nextAll().addBack());
        });
        $('#carousel-thumbs .carousel-item .row:nth-child(even)').each(function() {
          var boundary = $(this);
          $('<div class="carousel-item">').insertAfter(boundary.parent()).append(boundary.nextAll().addBack());
        });
      }
      // when the carousel slides, auto update
      $('#myCarousel').on('slide.bs.carousel', function(e) {
        var id = parseInt( $(e.relatedTarget).attr('data-slide-number') );
        $('[id^=carousel-selector-]').removeClass('selected');
        $('[id=carousel-selector-'+id+']').addClass('selected');
      });
      // when user swipes, go next or previous
      $('#myCarousel').swipe({
        fallbackToMouseEvents: true,
        swipeLeft: function(e) {
          $('#myCarousel').carousel('next');
        },
        swipeRight: function(e) {
          $('#myCarousel').carousel('prev');
        },
        allowPageScroll: 'vertical',
        preventDefaultEvents: false,
        threshold: 75
      });
      /*
      $(document).on('click', '[data-toggle="lightbox"]', function(event) {
        event.preventDefault();
        $(this).ekkoLightbox();
      });
      */
      
      $('#myCarousel .carousel-item img').on('click', function(e) {
        var src = $(e.target).attr('data-remote');
        if (src) $(this).ekkoLightbox();
      });

      