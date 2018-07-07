var responsiveProductPage = {
    view: '',

    init: function () {
        var _this = this;
        this.watch();
        jQuery(window).on('resize', function () {
            _this.watch();
        });
    },

    watch: function () {
        var _this = this;

        if (window.innerWidth >= 781) {
            this.view = 'desktop';
        } else {
            this.view = 'mobile';
        }

        _this.move();
    },

    move: function () {
        if (this.view == 'desktop') {
            $('.secondary.left').after($('nav.regular-menu'));
        } else {
            $('.mobile-menu .bar').after($('nav.regular-menu'));
        }
    }
};

jQuery(document).ready(function () {
    $('.bar').click(function () {
        if ($(this).parent().hasClass('active')) {
            $(this).parent().removeClass('active');
            $(this).next().slideUp();
        } else {
            $(this).parent().addClass('active');
            $(this).next().slideDown();
        }
    });

    $('.fa-sort-down').click(function () {
        if ($(this).parent().hasClass('active')) {
            $(this).parent().removeClass('active');
        } else {
            $(this).parent().addClass('active');
        }
    });
    $('.alert .close').click(function () {
        $(this).parentsUntil('.alert').remove();
    });
})

jQuery(window).on('load', function () {
    responsiveProductPage.init();
});