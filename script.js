Shery.imageEffect("#back", { style: 5, config: 
    {"a":{"value":1,"range":[0,30]},"b":{"value":-0.98,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.08442978686133},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4.42,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.09,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":1},"noise_speed":{"value":0.46,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":3}},"discard_threshold":{"value":0.51,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.35,"range":[0,2]},"noise_scale":{"value":12.21,"range":[0,100]}},
     gooey:true});
var elems = document.querySelectorAll(".elem");
var elemStates = new Map();  // Track state per element

elems.forEach(function(elem, i) {
    elemStates.set(elem, {
        h1s: elem.querySelectorAll("h1"),
        index: 0
    });
});

document.querySelector('#main').addEventListener("click", function() {
    elems.forEach(function(elem) {
        var state = elemStates.get(elem);
        var h1s = state.h1s;
        var index = state.index;
        
        if (h1s.length > 0) {
            gsap.to(h1s[index], {
                top: "-100%",
                ease: "expo.inOut",
                duration: 1,
                onComplete: function() {
                    gsap.set(h1s[index], { top: "100%" });
                }
            });
            
            var nextIndex = (index + 1) % h1s.length;
            
            gsap.fromTo(h1s[nextIndex], 
                { top: "100%" }, 
                { top: "0%", ease: "expo.inOut", duration: 1 }
            );
            
            elemStates.set(elem, { h1s: h1s, index: nextIndex });
        }
    });
});