# Progressively load on scroll your animation
[![npm version](https://badge.fury.io/js/bodymovin-progressively-load-on-scroll.svg)](https://www.npmjs.com/package/bodymovin-progressively-load-on-scroll)   

Required
-------------
Add to your page :
- [Jquery](https://jquery.com/)
- [Bodymin](https://github.com/bodymovin/bodymovin)

How to use it
-------------

`npm install -S bodymin-progressively-load-on-scroll`  

End add to your page
```
<script src="node_modules/bodymin-progressively-load-on-scroll/bodymin-animation.min.js" type="text/javascript"></script>
```

html source code  
```
<div 
    class="animation" <!-- detect doms to animate -->
    src="animations/test.json" <!-- animation path -->
    animation-en=".class-name" <!-- optionnal : show() dom with name ".class-name" when the animation is finish -->
    ></div>
    ```


Source code
-------------

Javascript
```
function bodymovinAnimation() {
    var scrollTop = $(document).scrollTop(),
        windowHeight = $(window).height(),
        indexList = [];

    animations.each(function (index) {
        var o = $(this);
        if (o) {
            var top = o.position().top;
            if (scrollTop < top && scrollTop + windowHeight > top + (o.height() * 0.7)) {
                var anim = bodymovin.loadAnimation({
                    container: this,
                    renderer: 'svg',
                    loop: false,
                    autoplay: true,
                    path: o.attr('src')
                });
                indexList.push(index);
            }
        }
    })

    for (var i = indexList.length - 1; i >= 0; i--)
        animations.splice(indexList[i], 1);
}

$(document).ready(function () {
    // run
    animations = $('.animation');

    $(document).bind('scroll', bodymovinAnimation);
    bodymovinAnimation();
});
```
html  
`<div class="animation" src="animations/test.json"></div>`

Demo
-------------

`npm run start`  
`open page http://localhost:8000`

