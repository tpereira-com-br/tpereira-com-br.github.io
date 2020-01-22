function getTransition(target, transition) {
    target.style.transition = transition;
}

function slideUp(el, duration) {
    for (var i = 0; i < el.length; i++) {
        var target = el[i];
        getTransition(target, "all 2s");
        target.style.height = "0px";
        target.style.opacity = "0";
    }
}

function slideDown(el, duration) {
    for (var i = 0; i < el.length; i++) {
        var target = el[i];
        getTransition(target, "all 2s");
        target.style.height = "auto";
        height = target.clientHeight + "px";
        target.style.height = "0px";
        setTimeout(() => {
            target.style.height = height;
            target.style.opacity = "1";
        }, 1);
    }
}

function slideToggle(target, duration) {
    for (var i = 0; i < target.length; i++) {
        var el = [target[i]];
        if (target[i].clientHeight > "0") {
            slideUp(el, duration);
        } else {
            slideDown(el, duration);
        }
    }
}