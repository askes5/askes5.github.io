'use strict';

// Hamburger menu functionality
//From https://github.com/BulmaTemplates/bulma-templates, used under MIT license.
document.addEventListener('DOMContentLoaded', function () {
    let $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    if ($navbarBurgers.length > 0) {
        $navbarBurgers.forEach(function (el) {
            el.addEventListener('click', function () {
                let target = el.dataset.target;
                let $target = document.getElementById(target);
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');
            });
        });
    }
});