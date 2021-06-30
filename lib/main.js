'use strict';

// Hamburger menu functionality
//From https://github.com/BulmaTemplates/bulma-templates, used under MIT license.
document.addEventListener('DOMContentLoaded', function () {
    var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    if ($navbarBurgers.length > 0) {
        $navbarBurgers.forEach(function (el) {
            el.addEventListener('click', function () {
                var target = el.dataset.target;
                var $target = document.getElementById(target);
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');
            });
        });
    }
});