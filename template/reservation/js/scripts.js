(function($) {
    "use strict";
    // Global vars
    var body = $('body');

    body.addClass('no-touch');

    // Fix Ultimate BG
    $('.ui-tabs .ui-tabs-nav .ui-tabs-anchor, .dish_categories_list > li > a').live('click', function() {
       $(window).trigger('resize');
    });

    // Add class for controll
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        $('body').addClass('disable-effects');
    }

    // Fixed parallax
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        $('body').addClass('disable-parallax');
    }

    if($('.menu-item-language').length) {
        $('.menu-item-language').prev().addClass('menu-item_last');
    }

    // Fix conflict with Tabs and WP Customizer
    if($('body').hasClass('customizer_page')) {
        $(".customizer_page .wpb_tabs").remove();
        $(".customizer_page .dishes-list_tabs").remove();
    }

   // Date picker
    if($('.js-date-picker').length) {
        $('.js-date-picker').datepicker({
            "dateFormat" : dateFormat
        });
    }

    // Time picker
    if($('.js-time-picker').length) {
        $('.js-time-picker').timepicker({
            showPeriod: true,
            amPmText   : ['am', 'pm']
        });
    }

    // Category list
    if($('.category-list_controller').length) {
        $('.category-list_controller').on('click', function() {
            $(this).toggleClass('open');
            $(this).next().toggleClass('show');
        });
    }

    $(document).click(function(event) {
        if ($(event.target).closest('.category-list_controller').length) return;
        $('.category-list_controller').removeClass('open').next().removeClass('show');
        event.stopPropagation();
    });

    // Scrolling Top
    function scrollingTop(elem, height) {
        var offset = elem.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop - height;

        $('body,html').animate({
            scrollTop: totalScroll
        }, 1500);
    }

    $('.page-navigation_ul a, .dish_categories_list.anchor-nav a').click(function () {
        var el = $(this).attr('href');
        var elWrapper = $(el);

        if(! /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            var offsetTop = 120;
        } else {
            var offsetTop = 80;
        }

        scrollingTop(elWrapper, offsetTop);

        return false;
    });

    $('.js-anchor-link').on('click', function() {
        var el = $(this).attr('href');
        var elWrapper = $(el);

        scrollingTop(elWrapper, 100);

        return false;
    });

    // Check userAgent.
    if(! /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        $('.to-top').click(function () {
            var el = $(this).attr('href');
            var elWrapper = $(el);
            var offsetTop = 90;
            scrollingTop(elWrapper, offsetTop);

            return false;
        });

        // Control visible .to-top
        $(window).on('scroll', function() {
            var scrolling = $(window).scrollTop();

            if(scrolling > 800 ) {
                if(!$('.to-top').hasClass('show')) {
                    $('.to-top').addClass('show');
                }
            } else {
                if($('.to-top').hasClass('show')) {
                    $('.to-top').removeClass('show');
                }
            }
        });

    } else {
        $('.to-top').hide();
    }

    // Fancy box
    if( $('.js-fancybox').length ) {
        $('.js-fancybox').fancybox({
            helpers: {
                overlay: {
                    locked: false
                }
            }
        });
    }

    if ( $( ".stm_drecipe_link" ).length ) {
        $( ".stm_drecipe_link" ).fancybox({
            openEffect: 'elastic',
            closeEffect: 'elastic',
            helpers : {
                media : {}
            }
        });
    }

    // Sticky menu
    if( $(window).width() < 900 && $('body').hasClass('main-nav_bottom') ) {
        $('body').removeClass('main-nav_bottom');
        $('body').addClass('was-bottom');

        if( ! $('body').hasClass('main-nav_top') && $('body').hasClass('was-bottom') ) {
            $('body').addClass('main-nav_top');
        }

    } else {
        if( $('body').hasClass('main-nav_top') && $('body').hasClass('was-bottom') ) {
            $('body').removeClass('main-nav_top');
            $('body').addClass('main-nav_bottom');
        }
    }

    $(document).ready(function() {
        var $topPanel    = $(".top_panel"),
            $body        = $("body"),
            $siteHeader  = $(".site-header"),
            $pageHeader  = $(".page-header"),
            scrolled     = $(window).scrollTop(),
            topOffset    = $siteHeader.offset().top + $siteHeader.outerHeight();

        if( $body.hasClass("main-nav_top") ) {
            if( ! $topPanel.length ) {

                if( ! $siteHeader.hasClass("site-header_sticky") ) {
                    $siteHeader.addClass("site-header_sticky");
                }
            }
            // Site Header - Sticky
            if( $topPanel.length && $topPanel.outerHeight() < scrolled ) {
                if( ! $siteHeader.hasClass("site-header_sticky") ) {
                    $siteHeader.addClass("site-header_sticky");
                }
            }

            if( $topPanel.length && $topPanel.outerHeight() > scrolled ) {
                if( $siteHeader.hasClass("site-header_sticky") ) {
                    $siteHeader.removeClass("site-header_sticky");
                }
            }

            // Site Header - Style
            if( $pageHeader.length && $pageHeader.outerHeight() < scrolled ) {
                if( ! $siteHeader.hasClass("smaller") ) {
                    $siteHeader.addClass("smaller");
                }
            }
            if( $pageHeader.length && $pageHeader.outerHeight() > scrolled ) {
                if( $siteHeader.hasClass("smaller") ) {
                    $siteHeader.removeClass("smaller");
                }
            }
        }
        if( $body.hasClass("main-nav_bottom") ) {
            // Site Header - Bottom
            if( typeof( topOffset ) !== undefined && scrolled > topOffset ) {
                $(".site-header").addClass("sticky show");
            }
        }
    });

    $(window).on('resize', function() {
        var scrolled = $(window).scrollTop(),
            $body = $("body"),
            $siteHeader = $(".site-header");

        if( $(this).width() < 900 ) {
            if( $body.hasClass('main-nav_bottom') ) {
                $body.removeClass('main-nav_bottom');
                $body.addClass('main-nav_top was-bottom');
                $siteHeader.removeClass("show sticky");
                $siteHeader.addClass("site-header_sticky");
            }
        } else {
            if( ! $body.hasClass('main-nav_bottom') && $body.hasClass('was-bottom') ) {
                $body.addClass('main-nav_bottom');
                $body.removeClass('main-nav_top');
                $siteHeader.removeClass("site-header_sticky");
            }
        }
    });

    $(window).on('scroll', function() {
        var $siteHeader = $(".site-header"),
            $body       = $("body"),
            $topPanel   = $(".top_panel");

        if( $topPanel.length && $body.hasClass("main-nav_top") ) {
            if( $(this).scrollTop() > $topPanel.outerHeight() ) {
                if( ! $siteHeader.hasClass("site-header_sticky") ) {
                    $siteHeader.addClass("site-header_sticky");
                }
            } else {
                if( $siteHeader.hasClass("site-header_sticky") ) {
                    $siteHeader.removeClass("site-header_sticky");
                }
            }
        }
    });

    // Top Nav
    if( body.hasClass("main-nav_top") ) {
        var topOffset,
            $pageHeader = $(".page-header"),
            $siteHeader = $(".site-header");

        if( $pageHeader.length ) {
            topOffset = $pageHeader.height() - 100;
        } else {
            topOffset = 100;
        }

        $(window).on('scroll', function() {
            var scrolled = $(window).scrollTop();

            if( scrolled > topOffset ) {
                if( ! $siteHeader.hasClass( 'smaller' ) ) {
                    $siteHeader.addClass( 'smaller' );
                } else {
                    return true;
                }
            } else {
                if( $siteHeader.hasClass( 'smaller' ) ) {
                    $siteHeader.removeClass( 'smaller' );
                } else {
                    return true;
                }
            }
        });
    }

    // Bottom Nav
    if( body.hasClass('main-nav_bottom') ) {
        var bottomNavOffset,
            bottomNav       = $('#masthead');
            bottomNavOffset = bottomNav.offset().top + bottomNav.height();

        $(window).on('scroll', function() {
            var scrolling = $(window).scrollTop(),
                $body = $("body");

            if( $body.hasClass('main-nav_bottom') ) {
                if( scrolling > bottomNavOffset ) {
                    if(!bottomNav.hasClass('sticky')) {
                        bottomNav.addClass('sticky');
                    }
                }

                if( scrolling < bottomNavOffset ) {
                    if(bottomNav.hasClass('sticky')) {
                        bottomNav.removeClass('sticky');
                    }
                }

                if( scrolling > bottomNavOffset + 200) {
                    if(!bottomNav.hasClass('show')) {
                        bottomNav.addClass('show');
                    }
                }

                if( scrolling < bottomNavOffset - 200 ) {
                    if(bottomNav.hasClass('show')) {
                        bottomNav.removeClass('show');
                    }
                }
            }

        });
    }

    // Dish tabs
    if( $( "#dish-tabs").length ) {
        $( "#dish-tabs" ).tabs();
    }

    // Fix menu in ipad
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        body.removeClass('no-touch');
        $('.main-menu > ul > li').on('click', function() {
            $('.main-menu > ul > li').removeClass('dropdown-show');
            $(this).addClass('dropdown-show');
            $(this).find('ul a').on('click', function() {
                $('.main-menu > ul > li').removeClass('dropdown-show');
            });
        });

        $(document).click(function(event) {
            if ($(event.target).closest('.main-menu > ul > li').length) return;
            $('.main-menu > ul > li').removeClass('dropdown-show');
            event.stopPropagation();
        });
    }
    // Mobile dropdown menu
    $('.main-menu_mobile > ul > li.menu-item-has-children > a').on('click', function() {
        $(this).parent('li').toggleClass('dropdown-active');
        $(this).parent('li').find('ul:first').slideToggle(100);

        return false;
    });

    Array.max = function( array ){
        return Math.max.apply( Math, array );
    };

    function ddMenuPosition() {
        var i = 0,
            subMenus = new Array(),
            maxHeightSubMenu = 0,
            totalOffset = 50,
            scrolling = $(window).scrollTop();

        $(".main-menu .sub-menu").each(function() {
            subMenus[i] = $(this).outerHeight();
            i++;
        });

        maxHeightSubMenu = Array.max(subMenus);
        totalOffset = maxHeightSubMenu + totalOffset;

        if(scrolling < totalOffset) {
            if( !$(".main-menu .sub-menu").hasClass('open-top') ) {
                $(".main-menu .sub-menu").addClass('open-top');
            }
        } else {
            if( $(".main-menu .sub-menu").hasClass('open-top') ) {
                $(".main-menu .sub-menu").removeClass('open-top');
            }
        }

        $(window).on("scroll", function() {
            scrolling = $(window).scrollTop();

            if(scrolling < totalOffset) {
                if( ! $(".main-menu .sub-menu").hasClass('open-top') ) {
                    $(".main-menu .sub-menu").addClass('open-top');
                }
            } else {
                if( $(".main-menu .sub-menu").hasClass('open-top') ) {
                    $(".main-menu .sub-menu").removeClass('open-top');
                }
            }

        });

    }
    if( $("body").hasClass("main-nav_bottom") ) {
        ddMenuPosition();
    }

    // Anchor navigation menu
    $(".main-menu a").on('click', function() {

        if( $(this)[0].hash ) {

            $(this).parent('li').addClass('current-menu-item').siblings().removeClass('current-menu-item');

            stm_anchor_scroll( $(this)[0].hash );

            return false;
        }

    });

    $(window).load(function() {
        stm_anchor_scroll( location.hash );
    });

})(jQuery);

function stm_anchor_scroll( anchor ) {

    if( anchor ) {
        var $elem = jQuery( anchor );

        if( $elem.length ) {
            jQuery( 'body, html' ).stop().animate({
                scrollTop: $elem.offset().top - 20
            }, 1500);
        }
    }
}