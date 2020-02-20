var toolbar = new Toolbar("myToolbar");
var toggle = document.getElementById("itemStateToggle");

toggle.addEventListener("click", function (e) {
    e.target.toggleActiveState();

    e.preventDefault();
});

function mixin(target, source, methods) {
    for (var ii = 2, ll = arguments.length; ii < ll; ii++) {
        var method = arguments[ii];

        target[method] = source[method].bind(source);
    }
}

mixin(toggle, toolbar.items[0], "toggleActiveState");