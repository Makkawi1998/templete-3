    $(".slider").owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        navText: ['<i class="fas fa-angle-double-left"></i>','<i class="fas fa-angle-double-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            776:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });


    $(".search-glass").on("click", function(){
        $(".search").addClass("searchactive");
    }
    )
    $(".closesearch").on("click", function(){
        $(".search").removeClass("searchactive");
    }
    )

    var $backToTop = $(".back-to-top");
$backToTop.hide();


$(window).on('scroll', function() {
  if ($(this).scrollTop() > 100) {
    $backToTop.fadeIn();
  } else {
    $backToTop.fadeOut();
  }
});

$backToTop.on('click', function(e) {
  $("html, body").animate({scrollTop: 0}, 500);
});