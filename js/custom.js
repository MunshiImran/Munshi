$(function () {
    //particles js
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 400,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "image",
                "stroke": {
                    "width": 3,
                    "color": "#fff"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "http://www.dynamicdigital.us/wp-content/uploads/2013/02/starburst_white_300_drop_2.png",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.7,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 5,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 20,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": false,
                "distance": 50,
                "color": "#ffffff",
                "opacity": 0.6,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 5,
                "direction": "bottom",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": true,
                    "rotateX": 300,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": false,
                    "mode": "bubble"
                },
                "onclick": {
                    "enable": true,
                    "mode": "repulse"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 150,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 200,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.2
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });
    //type js    
    $(".typer").typed({
        strings: ["Coder", "Designer", "Developer"],
        typeSpeed: 100,
        contentType: 'html',
        loop: true
    });




    ///
    // counter js
    $('.counter-value').counterUp({
        delay: 10,
        time: 1500
    });
    //contact form
    $(document).ready(function () {
        // Test for placeholder support
        $.support.placeholder = (function () {
            var i = document.createElement('input');
            return 'placeholder' in i;
        })();

        // Hide labels by default if placeholders are supported
        if ($.support.placeholder) {
            $('.form-label').each(function () {
                $(this).addClass('js-hide-label');
            });

            // Code for adding/removing classes here
            $('.form-group').find('input, textarea').on('keyup blur focus', function (e) {

                // Cache our selectors
                var $this = $(this),
                    $parent = $this.parent().find("label");

                switch (e.type) {
                    case 'keyup':
                        {
                            $parent.toggleClass('js-hide-label', $this.val() == '');
                        }
                        break;
                    case 'blur':
                        {
                            if ($this.val() == '') {
                                $parent.addClass('js-hide-label');
                            } else {
                                $parent.removeClass('js-hide-label').addClass('js-unhighlight-label');
                            }
                        }
                        break;
                    case 'focus':
                        {
                            if ($this.val() !== '') {
                                $parent.removeClass('js-unhighlight-label');
                            }
                        }
                        break;
                    default:
                        break;
                }
            });
        }
    });
    //
    $(window).scroll(function () {

        if ($(this).scrollTop() > (($('#skills').offset().top - 300) + ($('#skills').outerHeight()) - ($(window).height()))) {

            $(".progress-bar").each(function () {
                each_bar_width = $(this).attr('aria-valuenow');
                $(this).css({
                    width: each_bar_width + "%"
                });
                $(this).html('<span class="progress-tooltip" style="left:' + each_bar_width + '%">' + each_bar_width + '%</span>');
            });

        }

    });
    // external js: isotope.pkgd.js

    // init Isotope
    var iso = new Isotope('.grid', {
        itemSelector: '.element-item',
        layoutMode: 'fitRows'
    });

    // filter functions
    var filterFns = {
        // show if number is greater than 50
        numberGreaterThan50: function (itemElem) {
            var number = itemElem.querySelector('.number').textContent;
            return parseInt(number, 10) > 50;
        },
        // show if name ends with -ium
        ium: function (itemElem) {
            var name = itemElem.querySelector('.name').textContent;
            return name.match(/ium$/);
        }
    };

    // bind filter button click
    var filtersElem = document.querySelector('.filters-button-group');
    filtersElem.addEventListener('click', function (event) {
        // only work with buttons
        if (!matchesSelector(event.target, 'button')) {
            return;
        }
        var filterValue = event.target.getAttribute('data-filter');
        // use matching filter function
        filterValue = filterFns[filterValue] || filterValue;
        iso.arrange({
            filter: filterValue
        });
    });

    // change is-checked class on buttons
    var buttonGroups = document.querySelectorAll('.button-group');
    for (var i = 0, len = buttonGroups.length; i < len; i++) {
        var buttonGroup = buttonGroups[i];
        radioButtonGroup(buttonGroup);
    }

    function radioButtonGroup(buttonGroup) {
        buttonGroup.addEventListener('click', function (event) {
            // only work with buttons
            if (!matchesSelector(event.target, 'button')) {
                return;
            }
            buttonGroup.querySelector('.is-checked').classList.remove('is-checked');
            event.target.classList.add('is-checked');
        });
    }









    // animation smooth scroll
    //animation scroll js
    var html_body = $('html, body');
    $('.navbar a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 0
                }, 1500);
                return false;
            }
        }
    });









    ///////////////////////
    var back2top = $(".back-to-top");
    var html_body = $('html, body');
    back2top.click(function () {
        html_body.animate({
            scrollTop: 0
        }, 500);
    });

    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();
        if (scrolling > 200) {
            back2top.fadeIn(500);
        } else {
            back2top.fadeOut(500);
        }
        if (scrolling > 200) {
            $(".navbar").addClass("bg");
        } else {
            $(".navbar").removeClass("bg");
        }
    });
    //////////////////////////

    new WOW().init();






    // video background
    jQuery(function () {
        jQuery(".player").YTPlayer();
    });
    //preloader js
    $(window).on('load', function(){
        $(".preloader").delay(1000).fadeOut(500);
    });
});
