console.log("Webpack work very well");

import './style.styl';

$(function () {

    // Preloader
    // var $preloader = $('#page-preloader'),
    //     $spinner   = $preloader.find('.spinner');
    // $spinner.fadeOut();
    // $preloader.delay(350).fadeOut('slow');

    /* Параллакс от движения мыши */
    if ($(window).width() > 960)
    {
        $('body').parallax({
            'elements': [
                {
                    'selector': '.slider__ellips',
                    'properties': {
                        'x': {
                            'right': {
                                'initial': 0,
                                'multiplier': 0.002,
                                'unit': '%',
                                'invert': false
                            }
                        },
                        'y': {
                            'top': {
                                'initial': -10,
                                'multiplier': 0.002,
                                'unit': '%',
                                'invert': true
                            }
                        }
                    }
                },
                {
                    'selector': '.slider__lines-dot',
                    'properties': {
                        'x': {
                            'left': {
                                'initial': -14,
                                'multiplier': 0.0009,
                                'unit': '%',
                                'invert': false
                            }
                        },
                        'y': {
                            'bottom': {
                                'initial': -10,
                                'multiplier': 0.0009,
                                'unit': '%',
                                'invert': true
                            }
                        }
                    }
                },
                {
                    'selector': '.slider__plus-yellow',
                    'properties': {
                        'x': {
                            'left': {
                                'initial': 30,
                                'multiplier': 0.0009,
                                'unit': '%',
                                'invert': false
                            }
                        },
                        'y': {
                            'top': {
                                'initial': -40,
                                'multiplier': 0.0009,
                                'unit': '%',
                                'invert': true
                            }
                        }
                    }
                },
                {
                    'selector': '.slider__rnb-man',
                    'properties': {
                        'x': {
                            'left': {
                                'initial': 9,
                                'multiplier': 0.0003,
                                'unit': '%',
                                'invert': false
                            }
                        }
                    }
                }
            ]
        });
    };
});