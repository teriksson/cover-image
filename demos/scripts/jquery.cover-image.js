'use strict';

(function ($, window, undefined) {

    // Create prototype

    function CoverImage(element) {
        var _self = this;

        _self.options = {};

        _self.element = element;
        _self.$element = $(element);

        _self.wrapperTpl = '<div class="cover-image"></div>';
        _self.$wrapper = $(_self.wrapperTpl);

        _self.$wrapper.css({
            backgroundImage: 'url("' + _self.element.src + '")'
        });

        _self.$element.wrap(_self.$wrapper);
    }

    CoverImage.prototype = {};

    // Create jQuery plugin
    $.fn.coverImage = function () {
        return this.each(function () {
            var _self = this,
                $_self = $(_self);

            if (typeof $_self.data('coverImage') !== 'object') {
                // Bind object to element dataset
                $_self.data('coverImage', new CoverImage(_self));
            }
        });
    };

})(jQuery, window);
