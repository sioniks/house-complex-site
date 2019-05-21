 // $(document).on('click', '.params-plan', function () {
$(document).ready(function() {

     setTimeout(function() {
         $('.plans-standart').slick({
             infinite: true,
             speed: 700,
             slidesToShow: 1,
             slidesToSlide: 1,
             fade: true,
             cssEase: 'ease',
             arrows: false,
             asNavFor: '.plans-10',

         });

         $('.plans-10').slick({
             infinite: true,
             speed: 700,
             slidesToShow: 1,
             slidesToSlide: 1,
             fade: true,
             cssEase: 'ease',
             arrows: true,
             asNavFor: '.plans-standart',
             prevArrow: $('.prev-plan'),
             nextArrow: $('.next-plan'),
         });


         var filtered = false;


         if (filtered === false) {
             $('.plans-standart').slick('slickFilter','.check');
             $('.plans-10').slick('slickFilter','.check');
             filtered = true;
         } else {
             $('.plans-standart').slick('slickUnfilter');
             $('.plans-10').slick('slickUnfilter');
             filtered = false;
         }
     }, 100)



     $('.plans-standart').on('swipe', function() {
         activeSection();
     });

     $('.plans-10').on('swipe', function() {
         activeSection();
     });
     activeSection();


 });

 $(document).on('click', '.btl', function() {
     var current = $('.plans-standart .one_section.slick-active').attr('data-section');
     $('.elem').removeClass('active');
     $(".elem[data-section='" + current + "']").addClass('active');
     faSection2(current);
     activeSection();

     result.flor = ['', ''];
     result.area = [30, 200];
     result.room = ['', '', '', '', ''];
     getCard(result);

     $('.rm').removeClass('active');
     $('.max_filter .bt').removeClass('active');
 });



 $( ".one_section path" ).mouseenter(function() {
     var key = $(this).attr('data-key');
     $(".hover_svg[data-key='" + key + "']").addClass('active');
 });

 $( ".one_section path" ).mouseleave(function() {
     var key = $(this).attr('data-key');
     $(".hover_svg[data-key='" + key + "']").removeClass('active');
 });


 $(document).on('click', '.min_filter .elem', function(e) {
     e.preventDefault();
     activeSection();
 });

 $(document).on('click', '.one_section .hover_svg', function() {
     var key = $(this).attr('data-key');
     var link = $(this).parent('.one_section').find("a[data-key='" + key + "']").attr("href");
     window.location = link;
     // console.log(key);
     // console.log(link);
 });

 function activeSection() {
     var $cur = $('.min_filter .check.active').text();
     var $next = $('.min_filter .check.active').next('.min_filter .check').text();
     var $prev = $('.min_filter .check.active').prev('.min_filter .check').text();
     var $firstCheck = $('.min_filter .check:first span').text();
     var $lastCheck = $('.min_filter .check:last span').text();
     $('#prv').text($prev ? $prev : $lastCheck);
     $('#nxt').text($next ? $next : $firstCheck);
     $('#cur').text($cur);
     var $imgLink = $('.min_filter .elem.active').attr('data-section');
     $('#mini-plan').attr('src', '/static/img/content/mini-plan/'+ $imgLink + '.svg');
 }


$('.elem.check').each(function() {
     var activeSlide = $(this).attr('data-section');
     $('.one_section[data-section="'+ activeSlide +'"]').addClass('check');
});




