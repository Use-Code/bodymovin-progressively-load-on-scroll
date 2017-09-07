# Progressively load on scroll your animation


Required
-------------
Add to your page :
- [Jquery](https://jquery.com/)
- [Bodymin](https://github.com/bodymovin/bodymovin)

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

