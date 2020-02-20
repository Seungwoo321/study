function ToolbarItem(itemElement) {
    this.__el = itemElement;

    itemElement.addEventListener("click", this.toggleActiveState.bind(this));
}

Object.defineProperties(ToolbarItem.prototype, {
    enabled: {
        get: function () {
            return !this.__el.classList.contains("disabled");
        },
        set: function (value) {
            if (value) {
                this.__el.classList.remove("disabled");
            } else {
                this.__el.classList.add("disabled");
            }
        }
    },
    activated: {
        get: function () {
            return this.__el.classList.contains("active");
        },
        set: function (value) {
            if (value) {
                this.__el.classList.add("active");
            } else {
                this.__el.classList.remove("active");
            }
        }
    },
});

ToolbarItem.prototype.toggleActiveState = function () {
    this.activated = !this.activated;
};

var createToolbarItems = function (itemElements) {
    var items = [];

    [].forEach.call(itemElements, function (el, index, array) {
        var item = new ToolbarItem(el);

        items.push(item);
    });

    return items;
};

function Toolbar(elementId) {

    var element = document.getElementById(elementId);

    if (!element) {
        element = document.createElement("DIV");
        element.id = elementId;
        element.className = "toolbar";
    }

    var items = element.querySelectorAll(".toolbar-item");

    this.__el = element;
    this.items = createToolbarItems(items);
};

Toolbar.prototype = {
    add: function (options) {
        var span = document.createElement("SPAN");
        span.className = "toolbar-item";

        this.__el.appendChild(span);

        var item = new ToolbarItem(span);

        this.items.push(item);
    },
    remove: function (index) {
        var len = this.items.length;

        if (index > len || index < 0) {
            throw new Error("Index is out of range");
        }

        var item = this.items[index];
        this.items.splice(index, 1);

        this.__el.removeChild(item.__el);

        item = null;
    },
    appendTo: function (parentElement) {
        parentElement.appendChild(this.__el);
    }
};