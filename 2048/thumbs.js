(function (c) {
    try {
        document.createEvent("TouchEvent");
        return
    } catch (f) {
    }
    var d = {mousedown: "touchstart", mouseup: "touchend", mousemove: "touchmove"};
    var a = function () {
        for (var e in d) {
            document.body.addEventListener(e, function (i) {
                var h = b(d[i.type], i);
                i.target.dispatchEvent(h);
                var g = i.target["on" + d[i.type]];
                if (typeof g === "function") {
                    g(i)
                }
            }, false)
        }
    };
    var b = function (g, i) {
        var h = document.createEvent("MouseEvents");
        h.initMouseEvent(g, i.bubbles, i.cancelable, i.view, i.detail, i.screenX, i.screenY, i.clientX, i.clientY, i.ctrlKey, i.altKey, i.shiftKey, i.metaKey, i.button, i.relatedTarget);
        return h
    };
    if (document.readyState === "complete" || document.readyState === "loaded") {
        a()
    } else {
        c.addEventListener("load", a, false)
    }
})(window);