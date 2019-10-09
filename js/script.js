$('.flowing-scroll').on( 'click', function(){ 
    var el = $(this);
    var dest = el.attr('href'); // получаем направление
    if(dest !== undefined && dest !== '') { // проверяем существование
        $('html').animate({ 
            scrollTop: $(dest).offset().top // прокручиваем страницу к требуемому элементу
        }, 500 // скорость прокрутки
        );
    }
    return false;
});

$('.menu_btn').on('click', function(e) {
  e.preventDefault();
  $('.menu_adapt').toggleClass('menu_active');
});

$('.fa-times').on('click', function(e) {
  e.preventDefault();
  $('.menu_adapt').toggleClass('menu_active');
});

		 (function(){ 

            document.onreadystatechange = () => {

              if (document.readyState === 'complete') {
                        
                /**
                 * Setup your Lazy Line element.
                 * see README file for more settings
                 */

                let el = document.querySelector('#graphicdesign');
                let myAnimation = new LazyLinePainter(el, {"ease":"easeLinear","strokeWidth":1,"strokeOpacity":1,"strokeColor":"#222F3D","strokeCap":"square"}); 
                myAnimation.paint(); 
              }
            }

          })();


