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
