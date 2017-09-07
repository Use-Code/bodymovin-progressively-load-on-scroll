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
                anim.onComplete = function (e) {
                    var animationEnd = this.wrapper.getAttribute("animation-end");
                    if (animationEnd) {
                        $(animationEnd).show("bounce");
                    }
                }
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
