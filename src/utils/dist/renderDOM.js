"use strict";
exports.__esModule = true;
function render(query, block) {
    var root = document.querySelector(query);
    root.append(block.getElement());
    return root;
}
exports["default"] = render;
