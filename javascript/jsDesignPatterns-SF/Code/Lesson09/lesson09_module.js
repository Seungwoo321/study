define(function () {
    var _counter = 0;

    function generateId() {
        return "customId" + _counter++;
    }

    function create(tagName, id) {
        var el = document.createElement(tagName);

        el.id = id || generateId();

        return el;
    }

    return {
        generateId: generateId,
        create: create
    };
});